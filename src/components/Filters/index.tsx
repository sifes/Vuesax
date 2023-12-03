import React from 'react'
import { Drawer, Divider, Button, IconButton, Stack } from '@mui/material'
import SortIcon from '@mui/icons-material/Sort';
import { toCategories, toMaxPrice } from '@/utils/helpers'
import { FiltersProps } from '@/utils/types'
import { FiltersIconStyles, FiltersMobileWrapper, FiltersWrapper, ModalContentStyles, ModalFiltersStyles } from './ui'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { RatingFilter } from './Rating';
import Category from './Category';
import { PriceSlider } from './PriceSlider';

export const Filters: React.FC<FiltersProps> = ({ products, setProducts }) => {
    const maxPrice = toMaxPrice(products)
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [, setCurrentPage] = useLocalStorage('currentPage', 1)
    const [activeCategories, setActiveCategories] = React.useState<string[]>([]);
    const [activePrice, setActivePrice] = React.useState<number[]>([0, maxPrice])
    const [activeRating, setActiveRating] = React.useState<number>(0);

    function onApplyChanges(_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        const filteredProducts = products.filter((product) => {
            const isCategory = activeCategories.length === 0 || activeCategories.includes(product.category)
            const isPrice = product.price >= activePrice[0] && product.price <= activePrice[1]
            const isRating = activeRating === 0 || +activeRating - 1 < product.rating
            return isCategory && isPrice && isRating
        })
        setCurrentPage(1)
        setProducts(filteredProducts)
    }
    function onClearChanges(_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        setActiveCategories((_p) => [])
        setActivePrice((_p) => [0, maxPrice])
        setActiveRating((_p) => 0)
        setProducts(products)
    }
    return (
        <>
            <FiltersWrapper>
                <Category activeCategories={activeCategories} setActiveCategories={setActiveCategories} categories={toCategories(products)} />
                <Divider />
                <PriceSlider activePrice={activePrice} setActivePrice={setActivePrice} maxPrice={maxPrice} />
                <Divider />
                <RatingFilter activeRating={activeRating} setActiveRating={setActiveRating} />
                <Button variant='contained' onClick={onApplyChanges} >Apply Changes</Button>
                <Button variant='contained' onClick={onClearChanges}>Clear All Filters</Button>
            </FiltersWrapper>

            <FiltersMobileWrapper>
                <IconButton onClick={() => setMobileOpen((prevState) => !prevState)}
                    sx={FiltersIconStyles} color='primary'>
                    Filters
                    <SortIcon />
                </IconButton>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    anchor='right'
                    onClose={() => setMobileOpen((prevState) => !prevState)}
                    ModalProps={{ keepMounted: true }}
                    sx={ModalFiltersStyles}>
                    <Stack sx={ModalContentStyles} >
                        <Category activeCategories={activeCategories} setActiveCategories={setActiveCategories} categories={toCategories(products)} />
                        <Divider />
                        <PriceSlider activePrice={activePrice} setActivePrice={setActivePrice} maxPrice={maxPrice} />
                        <Divider />
                        <RatingFilter activeRating={activeRating} setActiveRating={setActiveRating} />
                        <Button variant='contained' onClick={onApplyChanges}>Apply Changes</Button>
                        <Button variant='contained' onClick={onClearChanges}>Clear All Filters</Button>
                    </Stack>
                </Drawer>
            </FiltersMobileWrapper >
        </>
    )
}
