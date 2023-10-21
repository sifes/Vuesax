import React from 'react'
import { Box, Typography, Slider, Button } from '@mui/material'

interface IPriceSlider {
    maxPrice: number,
}

export const PriceSlider: React.FC<IPriceSlider> = ({ maxPrice }) => {
    const [price, setPrice] = React.useState<number[]>([0, maxPrice])

    const minDistance = +(maxPrice / 50).toFixed(0)
    const handleChange = (event: Event, newValue: number | number[], activeThumb: number) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (activeThumb === 0) {
            setPrice([Math.min(newValue[0], price[1] - minDistance), price[1]]);
        } else {
            setPrice([price[0], Math.max(newValue[1], price[0] + minDistance)]);
        }
    };

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant='h6' >Price</Typography>
                <Typography variant='caption' color={'GrayText'}>min:{price[0]} max:{price[1]}</Typography>
            </Box>
            <Slider
                disableSwap
                value={price}
                onChange={handleChange}
                valueLabelDisplay="auto"
                min={0}
                max={maxPrice}
                sx={{ marginBottom: '10px' }}
            />
            <Button size='small' variant='contained'>Apply Changes</Button>

        </Box>
    )
}