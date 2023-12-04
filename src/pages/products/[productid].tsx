import axios from 'axios'
import { GetServerSideProps } from 'next'
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
import { CarouselProduct } from 'src/components/ProductPage/CarouselProduct'
import { ImagesModal } from 'src/components/ProductPage/ImagesModal'
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

/**
* @comment again component has too many parts in it, it's hard to read
* */
const ProductPage: React.FC<OneProductPageProps> = ({ images, description, discountPercentage, id, price, rating, stock, thumbnail, title, ...info }) => {
    return (
        <Box sx={ProductPageStyles} >
            <Stack direction={{ xs: 'column', md: 'row' }} gap={{ xs: 2, md: 5 }} alignItems={'center'} >
                <Box sx={CarouselWrapperStyles}>
                    <CarouselProduct images={images} />
                    <ImagesModal images={images} />
                </Box>
                <Stack sx={ProductContentStyles} >
                    <Typography variant='h2' fontWeight={600} fontSize={{ md: '3.75rem', xs: '2.5rem' }} >{title}</Typography>
                    <Stack direction={'row'} alignItems={'center'} gap={0.5} justifyContent={'space-between'}>
                        <Stack sx={RatingWrapperStyles}>
                            <Typography variant='caption' sx={RatingStyles}>{rating}</Typography>
                            <Rating size='large' value={rating} readOnly precision={0.1} />
                        </Stack>
                        <Typography variant='caption' sx={IdStyles}>id: {id}</Typography>
                    </Stack>
                    <Divider />
                    <Stack direction={'row'} alignItems={'center'} >
                        <Typography variant='h6' sx={{ opacity: 0.7 }}>Price: </Typography>
                        <Stack margin={'0 24px 0 12px'}>
                            <Typography variant='subtitle1' sx={OldPriceStyles}>${toOldPrice(price, discountPercentage)}</Typography>
                            <Typography variant='h5' sx={PriceStyles}>${price}</Typography>
                        </Stack>
                        <Typography variant='body1' component={'div'} sx={EconomyStyles}>Economy {discountPercentage}%</Typography>
                    </Stack>
                    <Typography variant='h5'>Availible in stock: {stock}</Typography>
                    <List >
                        {Object.entries(info).map(([key, value]) => (
                            <ListItem key={key} sx={ListItemStyles}>
                                <ListItemText sx={ListItemTextStyles} primaryTypographyProps={ListTextKeyStyles}>
                                    {key}
                                </ListItemText>
                                <ListItemText primaryTypographyProps={ListTextValueStyles}>{value}</ListItemText>
                            </ListItem>))}
                    </List>
                    <Divider />
                    <Typography variant='caption'>About this item</Typography>
                    <Typography variant='h6'>{description}</Typography>
                </Stack>
            </Stack>
            <Link href={'/products'}>
                <IconButton sx={ArrowBackStyles} size='large'><ArrowBackIcon color='primary' /></IconButton>
            </Link>
        </Box>
    )
}

export const getServerSideProps: GetServerSideProps<OneProductPageProps> = async ({ params }) => {
    const data = (await axios.get(`https://dummyjson.com/products/${params?.productid}`)).data
    return { props: { ...data } }
}
export default ProductPage


