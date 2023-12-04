import React from 'react'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import { Filters } from 'src/components/Filters'
import { Products } from 'src/components/Products'
import { PaginationProducts } from 'src/components/Products/PaginationProducts'
import { SearchProducts } from 'src/components/Products/SearchProducts'
import {
  ProductsPageWrapper,
  ProductsWrapper,
} from 'src/components/Products/ui'
import { useLocalStorage } from 'src/hooks/useLocalStorage'
import { toPagesCount } from 'src/utils/helpers'
import { ProductsPageProps } from 'src/utils/types'

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
