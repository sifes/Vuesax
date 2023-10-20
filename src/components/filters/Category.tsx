import React from 'react'
import { Box, Typography, FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import axios from 'axios'
import { GetStaticProps } from 'next'
import { IProduct } from '@/pages/products'

interface ICategory {
    categories: string[]
}
const Category: React.FC<ICategory> = ({ categories }) => {
    console.log(categories)
    return (
        <Box>
            <Typography variant='h6'>Category</Typography>
            <FormGroup sx={{ padding: '5px 0', gap: 1 }}>
                <FormControlLabel control={<Checkbox />} label="smartphones" />
                <FormControlLabel control={<Checkbox />} label="laptops" />
                <FormControlLabel control={<Checkbox />} label="fragrances" />
                <FormControlLabel control={<Checkbox />} label="skincare" />
                <FormControlLabel control={<Checkbox />} label="groceries" />
                <FormControlLabel control={<Checkbox />} label="home-decoration" />
                <FormControlLabel control={<Checkbox />} label="furniture" />
                <FormControlLabel control={<Checkbox />} label="womens-dresses" />
                <FormControlLabel control={<Checkbox />} label="mens-shirts" />
                <FormControlLabel control={<Checkbox />} label="mens-shoes" />
                <FormControlLabel control={<Checkbox />} label="mens-watches" />
                <FormControlLabel control={<Checkbox />} label="womens-watches" />
                <FormControlLabel control={<Checkbox />} label="womens-bags" />
                <FormControlLabel control={<Checkbox />} label="sunglasses" />
                <FormControlLabel control={<Checkbox />} label="automotive" />
                <FormControlLabel control={<Checkbox />} label="motorcycle" />
                <FormControlLabel control={<Checkbox />} label="lighting" />
            </FormGroup>
        </Box>
    )
}
export default Category

export const getStaticProps = async () => {
    const res = await axios.get('https://dummyjson.com/products?limit=100')
    const categories = await res.data.products.map((product: IProduct) => product.category)
    const uniqueCategories = []
    return {
        props: {
            categories,
        }
    }
}

