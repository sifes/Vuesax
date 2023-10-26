import React from 'react'
import { Box, Drawer, Divider, Button, IconButton } from '@mui/material'
import Category from './Category'
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
    const maxPrice = toMaxPrice(products)
    const [activeCategories, setActiveCategories] = React.useState<string[]>([]);
    const [activePrice, setActivePrice] = React.useState<number[]>([0, maxPrice])
    const [activeRating, setActiveRating] = React.useState<string[]>([]);

    function onApplyChanges(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        const filteredProducts = products.filter((product) => {
            const isCategory = activeCategories.length === 0 || activeCategories.includes(product.category)
            const isPrice = product.price >= activePrice[0] && product.price <= activePrice[1]
            const isRating = activeRating.length === 0 || activeRating.includes(Math.ceil(product.rating).toString())
            console.log(activeRating, Math.ceil(product.rating).toString())
            return isCategory && isPrice && isRating
        })
        setProducts(filteredProducts)
    }
    return (
        <>
            <Box sx={{
                display: { sm: 'flex', xs: 'none' },
                flexDirection: 'column',
                borderRadius: '8px',
                bgcolor: 'secondary.main',
                boxShadow: ' 0px 2px 8px 0px rgba(0, 0, 0, 0.14)',
                padding: { sm: '25px 12px', md: '25px 32px' },
                flex: '0 1 auto',
                maxWidth: { sm: '180px', md: '370px' },
                gap: '20px',
            }}>
                <Category setActiveCategories={setActiveCategories} categories={toCategories(products)} />
                <Divider color='#D6D6D6' />
                <PriceSlider setActivePrice={setActivePrice} maxPrice={maxPrice} />
                <Divider color='#D6D6D6' />
                <RatingFilter setActiveRating={setActiveRating} />
                <Button variant='contained' onClick={onApplyChanges} >Apply Changes</Button>
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
                        <Category setActiveCategories={setActiveCategories} categories={toCategories(products)} />
                        <Divider color='#D6D6D6' />
                        <PriceSlider setActivePrice={setActivePrice} maxPrice={maxPrice} />
                        <Divider color='#D6D6D6' />
                        <RatingFilter setActiveRating={setActiveRating} />
                        <Button variant='contained'>Clear All Filters</Button>
                    </Box>
                </Drawer>
            </Box >
        </>
    )
}