import React from 'react'
import { Pagination, Stack } from '@mui/material'
import { PaginationProductsProps } from '@/utils/types';
import { PaginationProductsStyles } from './ui';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export const PaginationProducts: React.FC<PaginationProductsProps> = ({ count, setPage, page }) => {
    const [currentPage, setCurrentPage] = useLocalStorage('currentPage', page)
    const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value)
        setPage(value);
    };
    return (
        <Stack spacing={2} sx={{ margin: '0 auto', width: '100%', }}>
            <Pagination
                sx={PaginationProductsStyles} count={count} page={currentPage} onChange={handleChange} />
        </Stack>
    )
}

