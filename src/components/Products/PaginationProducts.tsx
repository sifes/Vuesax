import React from 'react'
import { Pagination, Stack } from '@mui/material'
import { PaginationProductsProps } from '@/utils/types';
import { PaginationProductStyles, PaginationProductsStyles } from './ui';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export const PaginationProducts: React.FC<PaginationProductsProps> = ({ count, setPage, page }) => {
    const [currentPage, setCurrentPage] = useLocalStorage('currentPage', page)
    const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value)
        setPage(value);
    };
    return (
        <Stack spacing={2} sx={PaginationProductsStyles}>
            <Pagination sx={PaginationProductStyles} count={count} page={currentPage} onChange={handleChange} />
        </Stack>
    )
}

