import React from 'react'
import { Box, Typography, FormGroup, FormControlLabel, Checkbox, Slider } from '@mui/material'

interface IPriceSlider { }

export const PriceSlider: React.FC<IPriceSlider> = () => {
    const [value, setValue] = React.useState<number[]>([20, 37]);
    const minDistance = 10
    const handleChange = (event: Event, newValue: number | number[], activeThumb: number) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (activeThumb === 0) {
            setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
            setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }
    };

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant='h6' >Price</Typography>
                <Typography variant='caption' color={'GrayText'}>min:{value[0]} max:{value[1]}</Typography>
            </Box>
            <Slider
                disableSwap
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
            />
        </Box>
    )
}