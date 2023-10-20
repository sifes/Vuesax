import React from 'react'
import { Box, Drawer, Divider, Button, IconButton } from '@mui/material'
import Category from './Category'
import { PriceSlider } from './PriceSlider'
import { RatingFilter } from './Rating'
import SortIcon from '@mui/icons-material/Sort';
interface IFilters { }

export const Filters: React.FC<IFilters> = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [category, setCategory] = React.useState();
    const [price, setPrice] = React.useState();
    const [rating, setRating] = React.useState();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
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
                <Category categories={[]} />
                <Divider color='#D6D6D6' />
                <PriceSlider />
                <Divider color='#D6D6D6' />
                <RatingFilter />
                <Button variant='contained'>Clear All Filters</Button>
                <Button variant='contained'>Apply Changes</Button>
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
                <IconButton onClick={handleDrawerToggle}
                    sx={{ display: { sm: 'none' }, gap: '10px', fontSize: 32 }}
                    color='primary'>Filters<SortIcon /> </IconButton>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    anchor='right'
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true, }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, background: 'background' },
                    }}>
                    <Box sx={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <Category categories={['as']} />
                        <Divider color='#D6D6D6' />
                        <PriceSlider />
                        <Divider color='#D6D6D6' />
                        <RatingFilter />
                        <Button variant='contained'>Clear All Filters</Button>
                        <Button variant='contained'>Apply Changes</Button>
                    </Box>
                </Drawer>
            </Box >
        </>

    )
}