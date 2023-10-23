import axios from 'axios'
import { GetServerSideProps } from 'next'
import React from 'react'
import { IProduct } from '.'
import { CarouselProduct } from '@/ui/CarouselProduct'
import { Box, Container, Stack } from '@mui/material'

interface ProductPageProps extends IProduct {
}

const ProductPage: React.FC<ProductPageProps> = ({ brand, images, category, description, discountPercentage, id, price, rating, stock, thumbnail, title }) => {
    return (
        <Box sx={{ maxWidth: '1540px', margin: '40px auto' }} >
            <Stack direction={{ xs: 'column', sm: 'row' }}>
                <Box sx={{ flex: '0 0 25%', height: '100%', bgcolor: 'secondary.main', padding: '20px 40px', borderRadius: '12px' }}>
                    <CarouselProduct images={images} />
                </Box>
                <Box>
                    {brand}
                </Box>
            </Stack>
        </Box>
    )
}

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async ({ params }) => {
    const data = (await axios.get(`https://dummyjson.com/products/${params?.productid}`)).data
    return { props: { ...data } }
}
export default ProductPage


