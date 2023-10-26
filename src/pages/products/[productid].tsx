import axios from 'axios'
import { GetServerSideProps } from 'next'
import React from 'react'
import { CarouselProduct } from '@/widgets/ProductPage/CarouselProduct'
import { Box, Divider, List, ListItem, ListItemText, Stack, Typography } from '@mui/material'
import Rating from '@mui/material/Rating';
import { ImagesModal } from '@/widgets/ProductPage/ImagesModal'
import { OneProductPageProps } from '@/utils/types'
import { CarouselWrapperStyles, EconomyStyles, OldPriceStyles, PriceStyles, ProductPageStyles, RatingStyles, RatingWrapperStyles } from '@/widgets/ProductPage/ui'

const ProductPage: React.FC<OneProductPageProps> = ({ images, description, discountPercentage, id, price, rating, stock, thumbnail, title, ...info }) => {
    return (
        <Box sx={ProductPageStyles} >
            <Stack direction={{ xs: 'column', md: 'row' }} gap={{ xs: 2, md: 5 }} alignItems={'center'} >
                <Box sx={CarouselWrapperStyles}>
                    <CarouselProduct images={images} />
                    <ImagesModal images={images} />
                </Box>
                <Stack sx={{ flex: '1 1 auto', height: '100%' }} gap={3}>
                    <Typography variant='h2' fontWeight={600} >{title}</Typography>
                    <Stack direction={'row'} alignItems={'center'} gap={0.5} justifyContent={'space-between'}>
                        <Stack sx={RatingWrapperStyles}>
                            <Typography variant='caption' sx={RatingStyles}>{rating}</Typography>
                            <Rating size='large' value={rating} readOnly precision={0.1} />
                        </Stack>
                        <Typography variant='caption' sx={{ fontWeight: 300, fontSize: '14px' }}>id: {id}</Typography>
                    </Stack>
                    <Divider />
                    <Stack direction={'row'} alignItems={'center'} >
                        <Typography variant='h6' sx={{ opacity: 0.7 }}>Price: </Typography>
                        <Stack margin={'0 24px 0 12px'}>
                            <Typography variant='subtitle1' sx={OldPriceStyles}>${(price + price * discountPercentage / 100).toFixed(0)}</Typography>
                            <Typography variant='h5' sx={PriceStyles}>${price}</Typography>
                        </Stack>
                        <Typography variant='body1' component={'div'} sx={EconomyStyles}>Economy {discountPercentage}%</Typography>
                    </Stack>
                    <Typography variant='h5'>Availible in stock: {stock}</Typography>
                    <List >
                        {Object.entries(info).map(([key, value]) => (
                            <ListItem key={key} sx={{ paddingLeft: 0 }}>
                                <ListItemText sx={{ flex: '0 0 130px' }} primaryTypographyProps={{
                                    fontWeight: 300,
                                    fontSize: '24px',
                                    textTransform: 'capitalize',
                                }}>
                                    {key}
                                </ListItemText>
                                <ListItemText primaryTypographyProps={{
                                    fontWeight: 500,
                                    fontSize: '24px',
                                    textTransform: 'capitalize',
                                }} >{value}</ListItemText>
                            </ListItem>))}
                    </List>
                    <Divider />
                    <Typography variant='caption'>About this item</Typography>
                    <Typography variant='h6'>{description}</Typography>
                </Stack>
            </Stack>
        </Box>
    )
}

export const getServerSideProps: GetServerSideProps<OneProductPageProps> = async ({ params }) => {
    const data = (await axios.get(`https://dummyjson.com/products/${params?.productid}`)).data
    return { props: { ...data } }
}
export default ProductPage


