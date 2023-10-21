import React, { ChangeEvent } from 'react'
import { Box, Typography, FormGroup, FormControlLabel, Checkbox } from '@mui/material'

interface ICategory {
    categories: string[]
    setActiveCategories: React.Dispatch<React.SetStateAction<string[]>>
}
const Category: React.FC<ICategory> = ({ setActiveCategories, categories }) => {
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
                    <FormControlLabel key={category} control={<Checkbox value={category} onChange={onChange} />} label={category} />
                ))}
            </FormGroup>
        </Box>
    )
}

const MemoizedMyComponent = React.memo(Category);
export default MemoizedMyComponent;