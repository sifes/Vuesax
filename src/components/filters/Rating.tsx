import React from 'react'
import { Box, Typography, FormGroup, FormControlLabel, Checkbox, Rating } from '@mui/material'

interface IRating { }

export const RatingFilter: React.FC<IRating> = () => {
    return (
        <Box>
            <Typography variant='h6'>Rating</Typography>
            <FormGroup sx={{ padding: '5px 0' }}>
                <FormControlLabel control={<Checkbox />} label={<Rating name="read-only" value={5} readOnly />} />
                <FormControlLabel control={<Checkbox />} label={<Rating name="read-only" value={4} readOnly />} />
                <FormControlLabel control={<Checkbox />} label={<Rating name="read-only" value={3} readOnly />} />
                <FormControlLabel control={<Checkbox />} label={<Rating name="read-only" value={2} readOnly />} />
                <FormControlLabel control={<Checkbox />} label={<Rating name="read-only" value={1} readOnly />} />
            </FormGroup>
        </Box>
    )
}