import { Filters } from '@/components/filters/Filters'
import { Products } from '@/components/products/Products'
import { PaginationProducts } from '@/components/products/PaginationProducts'
import { SearchProducts } from '@/components/products/SearchProducts'
import { Box } from '@mui/material'
import React from 'react'
import axios from 'axios';
import { toCategories, toMaxPrice, toPagesCount } from '@/utils/helpers'

interface ProductPageProps {
    initialProducts: IProduct[];
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
export interface IFilters {
    category: string
    price: number
    rating: number
}
const ProductsPage: React.FC<ProductPageProps> = ({ initialProducts }) => {
    const [products, setProducts] = React.useState(initialProducts)
    const [page, setPage] = React.useState(1)
    return (
        <Box sx={{ display: 'flex', flexDirection: { sm: 'row', xs: 'column' }, gap: { md: '30px', xs: '16px' }, padding: { lg: '25px 32px', xs: '20px 12px' }, maxWidth: '1540px', margin: '0 auto' }}>
            <Filters products={initialProducts} setProducts={setProducts} />
            <Box sx={{ width: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <SearchProducts />
                <PaginationProducts page={page} setPage={setPage} count={toPagesCount(products)} />
                <Products products={products} currentPage={page} />
            </Box>
        </Box >
    )
}

export default ProductsPage

export async function getServerSideProps() {
    const data = (await axios.get(`https://dummyjson.com/products?limit=100`)).data
    return { props: { initialProducts: data.products } }
}