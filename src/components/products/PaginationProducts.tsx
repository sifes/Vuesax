import React from 'react'
import { Pagination, Stack } from '@mui/material'
interface IPaginationProducts {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>
}
export const PaginationProducts: React.FC<IPaginationProducts> = ({ page, setPage }) => {
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };
    return (
        <Stack spacing={2} sx={{ margin: '0 auto', width: '100%', }}>
            <Pagination
                sx={{
                    bgcolor: '#0F1642',
                    borderRadius: '20px',
                    padding: '4px',
                    '& .Mui-selected': {
                        backgroundColor: '#6F64F8 !important',
                    },
                    '& .MuiPagination-ul': {
                        justifyContent: 'center',
                    },
                    '& .MuiPaginationItem-root': {
                        minWidth: '28px',
                        height: '28px',
                    },
                    '& .MuiButtonBase-root': {
                        margin: '0 2px'
                    },

                }} count={4} page={page} onChange={handleChange} />
        </Stack>
    )
}

