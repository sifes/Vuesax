import React from 'react'
import { Box, Typography, FormGroup, FormControlLabel, Checkbox } from '@mui/material'

interface IMultiRange { }

export const Category: React.FC<IMultiRange> = () => {
    return (
        <Box>
            <Typography variant='h6'>Category</Typography>
            <FormGroup sx={{ padding: '5px 0' }}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                <FormControlLabel control={<Checkbox />} label="Required" />
                <FormControlLabel control={<Checkbox />} label="Required" />
                <FormControlLabel control={<Checkbox />} label="Required" />
                <FormControlLabel control={<Checkbox />} label="Required" />
            </FormGroup>
        </Box>
    )
}