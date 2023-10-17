import { Filters } from '@/components/filters/Filters'
import { Products } from '@/components/products/Products'
import { Box } from '@mui/material'
import React from 'react'

interface Iindex { }

const ProductsPage: React.FC<Iindex> = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: { sm: 'row', xs: 'column' },
            gap: '30px',
            padding: { lg: '25px 32px', xs: '20px 10px' },
        }}>
            <Filters />
            <Products />
        </Box>
    )
}

export default ProductsPage