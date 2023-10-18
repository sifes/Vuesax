import { Filters } from '@/components/filters/Filters'
import { Products } from '@/components/products/Products'
import { SearchProducts } from '@/components/products/SearchProducts'
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
            <Box sx={{
                width: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '28px'
            }}>
                <SearchProducts />
                <Products />
            </Box>

        </Box>
    )
}

export default ProductsPage