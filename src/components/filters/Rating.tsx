import React from 'react'
import { Box, Typography, FormGroup, FormControlLabel, Checkbox, Rating } from '@mui/material'

interface IRating {
    setActiveRating: React.Dispatch<React.SetStateAction<string[]>>
}

export const RatingFilter: React.FC<IRating> = ({ setActiveRating }) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setActiveRating((prevState) => [...prevState, e.target.value])
        } else {
            setActiveRating((prevState) => prevState.filter((activeCategory) => activeCategory !== e.target.value))
        }
    }

    return (
        <Box>
            <Typography variant='h6'>Rating</Typography>
            <FormGroup sx={{ padding: '5px 0', marginBottom: '10px' }}>
                {['5', '4', '3', '2', '1'].map((rating) => (
                    <FormControlLabel key={rating} control={<Checkbox value={rating} onChange={onChange} />} label={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Rating name="read-only" value={parseInt(rating)} readOnly />
                            <Typography variant='caption' sx={{ opacity: 0.6, marginTop: '2px', display: { sm: 'none', md: 'block' } }}>{+rating - 1}&nbsp;+</Typography>
                        </Box>
                    } />
                ))}
            </FormGroup>
        </Box>
    )
}