import axios from 'axios'
import { GetServerSideProps } from 'next'
import React from 'react'
import { IProduct } from '.'
import { CarouselProduct } from '@/ui/CarouselProduct'
import { Box, Divider, List, ListItem, ListItemText, Stack, Typography } from '@mui/material'
import Rating from '@mui/material/Rating';
import { ImagesModal } from '@/ui/ImagesModal'


interface ProductPageProps extends IProduct {
}



const ProductPage: React.FC<ProductPageProps> = ({ images, description, discountPercentage, id, price, rating, stock, thumbnail, title, ...info }) => {
    return (
        <Box sx={{ maxWidth: '1540px', margin: '20px auto 20px', bgcolor: 'secondary.main', padding: { md: '50px 60px', sm: '30px 40px', xs: '40px 20px', }, borderRadius: '12px', minHeight: '100vh' }} >
            <Stack direction={{ xs: 'column', md: 'row' }} gap={{ xs: 2, md: 5 }} alignItems={'center'} >
                <Box sx={{ flex: { md: '0 0 30%' }, height: '100%', maxWidth: '100%' }}>
                    <CarouselProduct images={images} />
                    <ImagesModal images={images} />
                </Box>
                <Stack sx={{ flex: '1 1 auto', height: '100%' }} gap={3}>
                    <Typography variant='h2' fontWeight={600} >{title}</Typography>
                    <Stack direction={'row'} alignItems={'center'} gap={0.5} justifyContent={'space-between'}>
                        <Stack direction={'row'} alignItems={'center'} gap={0.5} sx={{ bgcolor: 'primary.main', p: '8px 12px', borderRadius: '16px' }}>
                            <Typography variant='caption' sx={{ fontWeight: 700, fontSize: '20px', marginTop: '4px' }}>{rating}</Typography>
                            <Rating size='large' value={rating} readOnly precision={0.1} />
                        </Stack>
                        <Typography variant='caption' sx={{ fontWeight: 300, fontSize: '14px' }}>id: {id}</Typography>
                    </Stack>
                    <Divider color='#6F64F8' />
                    <Stack direction={'row'} alignItems={'center'} >
                        <Typography variant='h6' sx={{ opacity: 0.7 }}>Price: </Typography>
                        <Stack margin={'0 24px 0 12px'}>
                            <Typography variant='subtitle1' sx={{ textDecoration: 'line-through', opacity: 0.7 }}>${(price + price * discountPercentage / 100).toFixed(0)}</Typography>
                            <Typography variant='h5' sx={{ fontWeight: 600, marginLeft: '4px', marginTop: '-4px' }}>${price}</Typography>
                        </Stack>
                        <Typography variant='body1' component={'div'} sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            bgcolor: "primary.main",
                            color: "white",
                            p: "10px 16px",
                            borderRadius: 4
                        }}>Economy {discountPercentage}%</Typography>
                    </Stack>
                    <Typography variant='h5'>Availible in stock: {stock}</Typography>
                    <List >
                        {Object.entries(info).map(([key, value]) => (
                            <ListItem sx={{ paddingLeft: 0 }}>
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
                                }}>{value}</ListItemText>
                            </ListItem>))}
                    </List>
                    <Divider color='#6F64F8' />
                    <Typography variant='caption'>About this item</Typography>
                    <Typography variant='h6'>{description}</Typography>
                </Stack>
            </Stack>
        </Box>
    )
}

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async ({ params }) => {
    const data = (await axios.get(`https://dummyjson.com/products/${params?.productid}`)).data
    return { props: { ...data } }
}
export default ProductPage


