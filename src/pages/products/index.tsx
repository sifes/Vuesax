import { Filters } from '@/widgets/filters/Filters'
import { Products } from '@/widgets/products/Products'
import { PaginationProducts } from '@/widgets/products/PaginationProducts'
import { SearchProducts } from '@/widgets/products/SearchProducts'
import { Box, styled } from '@mui/material'
import React from 'react'
import axios from 'axios';
import { toPagesCount } from '@/utils/helpers'
import { ProductPageProps } from '@/utils/types'

const ProductsPageWrapper = styled(Box)`
    display: flex;
    max-width: 1540px;
    margin: 0 auto;
`;
const ProductsWrapper = styled(Box)`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 14px
`;


const ProductsPage: React.FC<ProductPageProps> = ({ initialProducts }) => {
    const [products, setProducts] = React.useState(initialProducts)
    const [page, setPage] = React.useState(1)
    return (
        <ProductsPageWrapper sx={{ flexDirection: { sm: 'row', xs: 'column' }, gap: { md: '30px', xs: '16px' }, padding: { lg: '25px 32px', xs: '20px 12px' } }} >
            <Filters products={initialProducts} setProducts={setProducts} />
            <ProductsWrapper>
                <SearchProducts products={products} />
                <PaginationProducts page={page} setPage={setPage} count={toPagesCount(products)} />
                <Products products={products} currentPage={page} />
                <PaginationProducts page={page} setPage={setPage} count={toPagesCount(products)} />
            </ProductsWrapper>
        </ProductsPageWrapper>
    )
}

export default ProductsPage

export async function getServerSideProps() {
    const data = (await axios.get(`https://dummyjson.com/products?limit=100`)).data
    return { props: { initialProducts: data.products } }
}