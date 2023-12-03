import { Filters } from './src/widgets/Filters'
/**
 * @comment components have incorrectly resolved paths
 * */
import { Products } from './src/widgets/products'
import { PaginationProducts } from './src/widgets/products/PaginationProducts'
import { SearchProducts } from './src/widgets/products/SearchProducts'
import React from 'react'
import axios from 'axios'
import { toPagesCount } from './src/utils/helpers'
import { ProductsPageProps } from './src/utils/types'
import { GetServerSideProps } from 'next'
import { ProductsPageWrapper, ProductsWrapper } from './src/widgets/products/ui'
import { useLocalStorage } from './src/hooks/useLocalStorage'

const ProductsPage: React.FC<ProductsPageProps> = ({ initialProducts }) => {
  const [products, setProducts] = React.useState(initialProducts)
  const [page, setPage] = React.useState(useLocalStorage('currentPage', 1)[0])
  return (
    <ProductsPageWrapper>
      <Filters products={initialProducts} setProducts={setProducts} />
      <ProductsWrapper>
        <SearchProducts products={products} />
        <PaginationProducts
          page={page}
          setPage={setPage}
          count={toPagesCount(products)}
        />
        <Products products={products} page={page} />
        <PaginationProducts
          page={page}
          setPage={setPage}
          count={toPagesCount(products)}
        />
      </ProductsWrapper>
    </ProductsPageWrapper>
  )
}

export default ProductsPage

export const getServerSideProps: GetServerSideProps<
  ProductsPageProps
> = async () => {
  const response = await axios.get(`https://dummyjson.com/products?limit=100`)
  const data = response.data
  return { props: { initialProducts: data.products } }
}
