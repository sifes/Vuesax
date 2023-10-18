import { Filters } from '@/components/filters/Filters'
import { Products } from '@/components/products/Products'
import { SearchProducts } from '@/components/products/SearchProducts'
import { Box } from '@mui/material'
import React from 'react'
import axios from 'axios';

interface Iindex {
    total: number;
    skip: number;
    limit: number;
    products: IProduct[];
}
export interface IProduct {
    brand: string
    category: string
    description: string
    discountPercentage: number
    id: number
    images: string[]
    price: number
    rating: number
    stock: number
    thumbnail: string
    title: string
}


const ProductsPage: React.FC<Iindex> = (props) => {
    const { products } = props
    return (
        <Box sx={{ display: 'flex', flexDirection: { sm: 'row', xs: 'column' }, gap: '30px', padding: { lg: '25px 32px', xs: '20px 10px' }, }}>
            <Filters />
            <Box sx={{ width: 1, display: 'flex', flexDirection: 'column', gap: '28px' }}>
                <SearchProducts />
                <Products products={products} />
            </Box>
        </Box >
    )
}

export default ProductsPage

export async function getServerSideProps() {
    const res = await axios.get(`https://dummyjson.com/products`)
    return { props: { ...res.data } }
}