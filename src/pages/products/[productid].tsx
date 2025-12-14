import axios from 'axios'
import { GetStaticProps, GetStaticPaths } from 'next'
import React from 'react'
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material'
import Rating from '@mui/material/Rating'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import {
  ProductPageStyles,
  CarouselWrapperStyles,
  ProductContentStyles,
  RatingWrapperStyles,
  RatingStyles,
  IdStyles,
  OldPriceStyles,
  PriceStyles,
  EconomyStyles,
  ListItemStyles,
  ListItemTextStyles,
  ListTextKeyStyles,
  ListTextValueStyles,
  ArrowBackStyles,
} from 'src/components/ProductPage/ui'
import { toOldPrice } from 'src/utils/helpers'
import { OneProductPageProps } from 'src/utils/types'

const CarouselProduct = dynamic(() => import('src/components/ProductPage/CarouselProduct').then(mod => mod.CarouselProduct), { ssr: false })
const ImagesModal = dynamic(() => import('src/components/ProductPage/ImagesModal').then(mod => mod.ImagesModal), { ssr: false })

// Helper function to format values for display
const formatValue = (value: any): string => {
    if (value === null || value === undefined) return 'N/A'

    if (Array.isArray(value)) {
        if (value.length === 0) return 'None'
        // For arrays, show count
        return `${value.length} item${value.length !== 1 ? 's' : ''}`
    }

    if (typeof value === 'object') {
        // For objects like dimensions, format nicely
        const entries = Object.entries(value)
        if (entries.length === 0) return 'None'

        // Check if it's a dimensions-like object
        if ('width' in value || 'height' in value || 'depth' in value) {
            const parts = []
            if (value.width) parts.push(`W: ${value.width}`)
            if (value.height) parts.push(`H: ${value.height}`)
            if (value.depth) parts.push(`D: ${value.depth}`)
            return parts.join(' × ')
        }

        // For other objects, show key count
        return `${entries.length} field${entries.length !== 1 ? 's' : ''}`
    }

    return String(value)
}

/**
* @comment again component has too many parts in it, it's hard to read
* */
const ProductPage: React.FC<OneProductPageProps> = ({ images, description, discountPercentage, id, price, rating, stock, thumbnail, title, ...info }) => {
    return (
        <Box sx={ProductPageStyles} >
            <Stack direction={{ xs: 'column', md: 'row' }} gap={{ xs: 3, md: 5 }} alignItems={{ xs: 'stretch', md: 'flex-start' }} >
                <Box sx={CarouselWrapperStyles}>
                    <CarouselProduct images={images} />
                    <ImagesModal images={images} />
                </Box>
                <Stack sx={ProductContentStyles} >
                    <Typography variant='h2' fontWeight={600} fontSize={{ md: '3.75rem', sm: '2.5rem', xs: '2rem' }} >{title}</Typography>
                    <Stack direction={'row'} alignItems={'center'} gap={{ xs: 0.5, md: 1 }} justifyContent={'space-between'} flexWrap={'wrap'}>
                        <Stack sx={RatingWrapperStyles}>
                            <Typography variant='caption' sx={RatingStyles}>{rating}</Typography>
                            <Rating size='large' value={rating} readOnly precision={0.1} sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }} />
                        </Stack>
                        <Typography variant='caption' sx={IdStyles}>id: {id}</Typography>
                    </Stack>
                    <Divider />
                    <Stack direction={{ xs: 'column', sm: 'row' }} alignItems={{ xs: 'flex-start', sm: 'center' }} gap={{ xs: 1, sm: 0 }}>
                        <Typography variant='h6' sx={{ opacity: 0.7, fontSize: { xs: '1rem', md: '1.25rem' } }}>Price: </Typography>
                        <Stack margin={{ xs: '0 0 0 0', sm: '0 24px 0 12px' }}>
                            <Typography variant='subtitle1' sx={{ ...OldPriceStyles, fontSize: { xs: '0.875rem', md: '1rem' } }}>${toOldPrice(price, discountPercentage)}</Typography>
                            <Typography variant='h5' sx={{ ...PriceStyles, fontSize: { xs: '1.25rem', md: '1.5rem' } }}>${price}</Typography>
                        </Stack>
                        <Typography variant='body1' component={'div'} sx={{ ...EconomyStyles, fontSize: { xs: '0.875rem', md: '1rem' } }}>Economy {discountPercentage}%</Typography>
                    </Stack>
                    <Typography variant='h5' sx={{ fontSize: { xs: '1.125rem', md: '1.5rem' } }}>Availible in stock: {stock}</Typography>
                    <List >
                        {Object.entries(info).map(([key, value]) => (
                            <ListItem key={key} sx={ListItemStyles}>
                                <Stack direction="column" gap={0.5} width="100%">
                                    <Typography sx={ListTextKeyStyles}>
                                        {key}
                                    </Typography>
                                    <Typography sx={ListTextValueStyles}>
                                        {formatValue(value)}
                                    </Typography>
                                </Stack>
                            </ListItem>))}
                    </List>
                    <Divider />
                    <Typography variant='caption' sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>About this item</Typography>
                    <Typography variant='h6' sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, lineHeight: 1.6 }}>{description}</Typography>
                </Stack>
            </Stack>
            <Link href={'/products'}>
                <IconButton sx={ArrowBackStyles} size='large'><ArrowBackIcon color='primary' /></IconButton>
            </Link>
        </Box>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await axios.get('https://dummyjson.com/products?limit=100')
    const products = response.data.products

    const paths = products.map((product: any) => ({
        params: { productid: product.id.toString() }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<OneProductPageProps> = async ({ params }) => {
    const data = (await axios.get(`https://dummyjson.com/products/${params?.productid}`)).data
    return {
        props: { ...data }
    }
}
export default ProductPage


