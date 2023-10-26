import React from 'react'
import { Pagination, Stack } from '@mui/material'
import { PaginationProductsProps } from '@/utils/types';
import { PaginationProductsStyles } from './ui';

export const PaginationProducts: React.FC<PaginationProductsProps> = ({ page, setPage, count }) => {
    const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };
    return (
        <Stack spacing={2} sx={{ margin: '0 auto', width: '100%', }}>
            <Pagination
                sx={PaginationProductsStyles} count={count} page={page} onChange={handleChange} />
        </Stack>
    )
}

