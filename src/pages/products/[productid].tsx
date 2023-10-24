import axios from 'axios'
import { GetServerSideProps } from 'next'
import React from 'react'
import { IProduct } from '.'
import { CarouselProduct } from '@/ui/CarouselProduct'
import { Box, Divider, List, ListItem, ListItemText, Stack, Typography, styled } from '@mui/material'
import ListSubheader from '@mui/material/ListSubheader';
interface ProductPageProps extends IProduct {
}



const ProductPage: React.FC<ProductPageProps> = ({ images, description, discountPercentage, id, price, rating, stock, thumbnail, title, ...info }) => {
    console.log(info)
    return (
        <Box sx={{ maxWidth: '1540px', margin: '40px auto' }} >
            <Stack direction={{ xs: 'column', sm: 'row' }}>
                <Box sx={{ flex: '0 0 25%', height: '100%', bgcolor: 'secondary.main', padding: '20px 40px', borderRadius: '12px' }}>
                    <CarouselProduct images={images} />
                </Box>
                <Stack>
                    <Typography>{title}</Typography>
                    <Box>Rating</Box>
                    <Divider></Divider>
                    <Typography>{price}</Typography>
                    <Typography>{stock}</Typography>
                    <List >
                        {Object.entries(info).map(([key, value]) => (
                            <ListItem >
                                <ListSubheader sx={{ bgcolor: 'transparent', color: 'black' }}>{key}</ListSubheader>
                                <ListItemText primary={value} />
                            </ListItem>))}
                    </List>
                    <Divider></Divider>
                    <Typography>About this items</Typography>
                    <Typography>{description}</Typography>
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


