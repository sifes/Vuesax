import React from 'react'
import { Box, Drawer, Divider, Button, IconButton } from '@mui/material'
import { Category } from './Category'
import { PriceSlider } from './PriceSlider'
import { RatingFilter } from './Rating'
import SortIcon from '@mui/icons-material/Sort';
import { IProduct } from '@/pages/products'
import { toCategories, toMaxPrice } from '@/utils/helpers'

interface FiltersProps {
    products: IProduct[]
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
}

export const Filters: React.FC<FiltersProps> = ({ products, setProducts }) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [filters, setFilters] = React.useState({})
    const [category, setCategory] = React.useState();
    const [rating, setRating] = React.useState();

    return (
        <>
            <Box sx={{
                display: { sm: 'flex', xs: 'none' },
                flexDirection: 'column',
                borderRadius: '8px',
                bgcolor: 'secondary.main',
                boxShadow: ' 0px 2px 8px 0px rgba(0, 0, 0, 0.14)',
                padding: { sm: '25px 16px', md: '25px 32px' },
                flex: '0 1 auto',
                maxWidth: { sm: '180px', md: '370px' },
                gap: '20px',
            }}>
                <Category categories={toCategories(products)} />
                <Divider color='#D6D6D6' />
                <PriceSlider maxPrice={toMaxPrice(products)} />
                <Divider color='#D6D6D6' />
                <RatingFilter />
                <Button variant='contained'>Clear All Filters</Button>
            </Box>


            <Box sx={{
                display: { sm: 'none', xs: 'flex' },
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                borderRadius: '8px',
                bgcolor: 'secondary.main',
                boxShadow: ' 0px 2px 8px 0px rgba(0, 0, 0, 0.14)',
                padding: '0px',
            }}>
                <IconButton onClick={() => setMobileOpen((prevState) => !prevState)}
                    sx={{ display: { sm: 'none' }, gap: '10px', fontSize: 32, }} color='primary'>
                    Filters
                    <SortIcon />
                </IconButton>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    anchor='right'
                    onClose={() => setMobileOpen((prevState) => !prevState)}
                    ModalProps={{ keepMounted: true, }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, background: 'background' },
                    }}>
                    <Box sx={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <Category categories={toCategories(products)} />
                        <Divider color='#D6D6D6' />
                        <PriceSlider maxPrice={toMaxPrice(products)} />
                        <Divider color='#D6D6D6' />
                        <RatingFilter />
                        <Button variant='contained'>Clear All Filters</Button>
                    </Box>
                </Drawer>
            </Box >
        </>

    )
}