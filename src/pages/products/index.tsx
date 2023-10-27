import { Filters } from '@/widgets/Filters'
import { Products } from '@/widgets/Products'
import { PaginationProducts } from '@/widgets/Products/PaginationProducts'
import { SearchProducts } from '@/widgets/Products/SearchProducts'
import React from 'react'
import axios from 'axios';
import { toPagesCount } from '@/utils/helpers'
import { ProductsPageProps } from '@/utils/types'
import { GetServerSideProps } from 'next'
import { ProductsPageWrapper, ProductsWrapper } from '@/widgets/Products/ui'

const ProductsPage: React.FC<ProductsPageProps> = ({ initialProducts }) => {
    const [products, setProducts] = React.useState(initialProducts)
    const [page, setPage] = React.useState(1)
    return (
        <ProductsPageWrapper >
            <Filters products={initialProducts} setProducts={setProducts} />
            <ProductsWrapper>
                <SearchProducts products={products} />
                <PaginationProducts page={page} setPage={setPage} count={toPagesCount(products)} />
                <Products products={products} page={page} />
                <PaginationProducts page={page} setPage={setPage} count={toPagesCount(products)} />
            </ProductsWrapper>
        </ProductsPageWrapper>
    )
}

export default ProductsPage

export const getServerSideProps: GetServerSideProps<ProductsPageProps> = async () => {
    const response = (await axios.get(`https://dummyjson.com/products?limit=100`))
    const data = response.data
    return { props: { initialProducts: data.products } }
}