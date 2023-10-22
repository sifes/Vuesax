import { GetServerSideProps, GetServerSidePropsResult } from 'next'
import React from 'react'

interface ProductPageProps { }

const ProductPage: React.FC<ProductPageProps> = ({ }) => {
    return (
        <div>productid</div>
    )
}

export async function getServerSideProps() {
    return { props: {} }
}
export default ProductPage