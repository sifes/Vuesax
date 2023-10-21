import React from 'react'
import { Box, Typography, FormGroup, FormControlLabel, Checkbox, Rating, Button } from '@mui/material'

interface IRating { }

export const RatingFilter: React.FC<IRating> = () => {
    return (
        <Box>
            <Typography variant='h6'>Rating</Typography>
            <FormGroup sx={{ padding: '5px 0', marginBottom: '10px' }}>
                <FormControlLabel control={<Checkbox />} label={<Rating name="read-only" value={5} readOnly />} />
                <FormControlLabel control={<Checkbox />} label={<Rating name="read-only" value={4} readOnly />} />
                <FormControlLabel control={<Checkbox />} label={<Rating name="read-only" value={3} readOnly />} />
                <FormControlLabel control={<Checkbox />} label={<Rating name="read-only" value={2} readOnly />} />
                <FormControlLabel control={<Checkbox />} label={<Rating name="read-only" value={1} readOnly />} />
            </FormGroup>
            <Button size='small' variant='contained'>Apply Changes</Button>

        </Box>
    )
}