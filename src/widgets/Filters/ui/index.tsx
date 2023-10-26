import { Box, styled } from "@mui/material";

export const FiltersWrapper = styled(Box)(({ theme }) => ({
    borderRadius: '8px',
    background: theme.palette.secondary.main,
    boxShadow: ' 0px 2px 8px 0px rgba(0, 0, 0, 0.14)',
    gap: '20px',
    flex: '0 1 auto',
    display: 'flex',
    flexDirection: 'column',
    padding: '25px 12px',
    maxWidth: '180px',
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    },
    [theme.breakpoints.up('md')]: {
        padding: '25px 32px',
        maxWidth: '370px',
    },
}));
export const FiltersMobileWrapper = styled(Box)(({ theme }) => ({
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    borderRadius: '8px',
    background: theme.palette.secondary.main,
    boxShadow: ' 0px 2px 8px 0px rgba(0, 0, 0, 0.14)',
    padding: '0px',
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
        display: 'none',
    },
}));

