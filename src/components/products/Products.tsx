import React from 'react'
import { Box, Typography, FormGroup, FormControlLabel, Checkbox } from '@mui/material'

interface IProducts { }

export const Products: React.FC<IProducts> = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '8px',
            bgcolor: 'secondary.main',
            boxShadow: ' 0px 2px 8px 0px rgba(0, 0, 0, 0.14)',
            padding: '25px 32px',
            flex: '1 0 auto',
        }}>
            <Typography variant='h6'>Search hear</Typography>
        </Box>
    )
}