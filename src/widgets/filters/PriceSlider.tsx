import React from 'react'
import { Box, Typography, Slider, Stack } from '@mui/material'
import { PriceSliderProps } from '@/utils/types'
import { FormGroupStyles } from './ui'

export const PriceSlider: React.FC<PriceSliderProps> = ({ activePrice, maxPrice, setActivePrice }) => {
    const minDistance = +(maxPrice / 50).toFixed(0)
    const [price, setPrice] = React.useState<number[]>([0, maxPrice])

    const handleChange = (_event: Event, newValue: number | number[], activeThumb: number) => {
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
    }, [price, setActivePrice])

    React.useEffect(() => {
        if (activePrice[0] !== price[0] || activePrice[1] !== price[1]) {
            setPrice(activePrice)
        }
    }, [price, activePrice, setPrice])

    return (
        <Box>
            <Stack alignItems='center' justifyContent='space-between' flexDirection={'row'}>
                <Typography variant='h6' >Price</Typography>
                <Typography variant='caption' color={'GrayText'}>min:{price[0]} max:{price[1]}</Typography>
            </Stack>
            <Slider
                disableSwap
                value={price}
                onChange={handleChange}
                valueLabelDisplay="auto"
                min={0}
                max={maxPrice}
                sx={FormGroupStyles}
            />
        </Box>
    )
}