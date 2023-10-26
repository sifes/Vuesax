import React from 'react'
import { Box, Typography, Slider } from '@mui/material'
import { PriceSliderProps } from '@/utils/types'



export const PriceSlider: React.FC<PriceSliderProps> = ({ maxPrice, setActivePrice }) => {
    const minDistance = +(maxPrice / 50).toFixed(0)
    const [price, setPrice] = React.useState<number[]>([0, maxPrice])

    const handleChange = (event: Event, newValue: number | number[], activeThumb: number) => {
        if (!Array.isArray(newValue)) return;
        if (activeThumb === 0) {
            setPrice((prevValue) => [Math.min(newValue[0], prevValue[1] - minDistance), prevValue[1]]);
        } else {
            setPrice((prevValue) => [prevValue[0], Math.max(newValue[1], prevValue[0] + minDistance)]);
        }
    };

    React.useEffect(() => {
        const id = setTimeout(() => {
            setActivePrice(price)
        }, 500)
        return () => clearTimeout(id)
    }, [price])

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
        </Box>
    )
}