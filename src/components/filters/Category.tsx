import React from 'react'
import { Box, Typography, FormGroup, FormControlLabel, Checkbox, Button } from '@mui/material'

interface ICategory {
    categories: string[]
}
export const Category: React.FC<ICategory> = ({ categories }) => {
    return (
        <Box>
            <Typography variant='h6'>Category</Typography>
            <FormGroup sx={{ padding: '5px 0', gap: 1, marginBottom: '10px' }}>
                {categories.map((category) => (
                    <FormControlLabel key={category} control={<Checkbox />} label={category} />
                ))}

                {/* <FormControlLabel control={<Checkbox />} label="smartphones" />
                <FormControlLabel control={<Checkbox />} label="laptops" />
                <FormControlLabel control={<Checkbox />} label="fragrances" />
                <FormControlLabel control={<Checkbox />} label="skincare" />
                <FormControlLabel control={<Checkbox />} label="groceries" />
                <FormControlLabel control={<Checkbox />} label="home-decoration" />
                <FormControlLabel control={<Checkbox />} label="furniture" />
                <FormControlLabel control={<Checkbox />} label="womens-dresses" />
                <FormControlLabel control={<Checkbox />} label="mens-shirts" />
                <FormControlLabel control={<Checkbox />} label="mens-shoes" />
                <FormControlLabel control={<Checkbox />} label="mens-watches" />
                <FormControlLabel control={<Checkbox />} label="womens-watches" />
                <FormControlLabel control={<Checkbox />} label="womens-bags" />
                <FormControlLabel control={<Checkbox />} label="sunglasses" />
                <FormControlLabel control={<Checkbox />} label="automotive" />
                <FormControlLabel control={<Checkbox />} label="motorcycle" />
                <FormControlLabel control={<Checkbox />} label="lighting" /> */}
            </FormGroup>

            <Button size='small' variant='contained'>Apply Changes</Button>

        </Box>
    )
}