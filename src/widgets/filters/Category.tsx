import React, { ChangeEvent } from 'react'
import { Box, Typography, FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import { CategoryProps } from '@/utils/types'

const Category: React.FC<CategoryProps> = ({ activeCategories, setActiveCategories, categories }) => {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setActiveCategories((prevState) => [...prevState, e.target.value])
        } else {
            setActiveCategories((prevState) => prevState.filter(product => product !== e.target.value))
        }
    }
    return (
        <Box>
            <Typography variant='h6'>Category</Typography>
            <FormGroup sx={{ padding: '5px 0', gap: 1, marginBottom: '10px' }}>
                {categories.map((category) => (
                    <FormControlLabel key={category} control={<Checkbox value={category} checked={activeCategories.includes(category)} onChange={onChange} />} label={category} />
                ))}
            </FormGroup>
        </Box>
    )
}

export default Category;