import { Filters } from '@/widgets/Filters'
/**
* @comment components have incorrectly resolved paths
* */
import { Products } from '@/widgets/products'
import { PaginationProducts } from '@/widgets/products/PaginationProducts'
import { SearchProducts } from '@/widgets/products/SearchProducts'
import React from 'react'
import axios from 'axios';
import { toPagesCount } from '@/utils/helpers'
import { ProductsPageProps } from '@/utils/types'
import { GetServerSideProps } from 'next'
import { ProductsPageWrapper, ProductsWrapper } from '@/widgets/products/ui'
import { useLocalStorage } from '@/hooks/useLocalStorage'

const ProductsPage: React.FC<ProductsPageProps> = ({ initialProducts }) => {
    const [products, setProducts] = React.useState(initialProducts)
    const [page, setPage] = React.useState(useLocalStorage('currentPage', 1)[0])
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
