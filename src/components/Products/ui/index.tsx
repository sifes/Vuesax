import { Stack, styled } from "@mui/material";
export const ProductsPageWrapper = styled(Stack)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1540px',
    margin: '0 auto',
    gap: '16px',
    padding: '10px 12px',
    [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
    },
    [theme.breakpoints.up('md')]: {
        gap: '30px',
    },
    [theme.breakpoints.up('lg')]: {
        padding: '25px 32px',
    },
}));
export const ProductsWrapper = styled(Stack)(() => ({
    width: '100%',
    flexDirection: 'column',
    gap: '16px',
}));
export const ProductStyles = {
    display: 'flex',
    bgcolor: 'secondary.main',
    height: 1,
    flexDirection: 'column',
};
export const NoProductStyles = {
    bgcolor: 'secondary.main',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    gap: '10px',
    padding: '10px',
};
//// </--- Products ---/> ////

//// <--- Autocomplete ---> ////
export const PopperStyles = {
    '.MuiPaper-root': {
        bgcolor: 'secondary.main',
    },
    '.MuiAutocomplete-listbox': {
        bgcolor: 'secondary.main',
    },
    '.MuiAutocomplete-groupLabel': {
        position: 'relative',
        bgcolor: 'secondary.main',
        color: 'text.dark',
    },
}
export const AutocompleteStyles = {
    bgcolor: 'secondary.main',
    borderRadius: '10px',
    color: '#fff',
    boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.14)',
    '.Mui-focused': {
        color: '#fff',
        borderRadius: '10px',
    },
}
//// </--- Autocomplete ---/> ////

//// <--- Pagination ---> ////
export const PaginationProductStyles = {
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
        margin: '0 1px'
    },
}
export const PaginationProductsStyles = {
    margin: '0 auto',
    width: '100%',
}
//// </--- Pagination ---/> ////

//// <--- Content ---> ////
export const GridSkeletonStyles = {
    maxWidth: '369px',
    maxHeight: '483px',
    transform: 'none',
    height: {
        sm: '100%',
        xs: '400px'
    },
    animationDelay: '-1s'
}
export const GridProductsStyles = {
    maxWidth: '369px'
}
export const TitleStyles = {
    mb: '8px',
    flex: '1 1 auto'
}
export const BrandStyles = {
    fontWeight: 300,
    fontSize: {
        sm: '12px',
        xs: '10px'
    },
}
export const CategoryStyles = {
    fontSize: {
        sm: '12px',
        xs: '10px'
    },
}
export const PriceStyles = {
    fontWeight: 600
}
export const SkeletonStyles = {
    maxWidth: '369px',
    maxHeight: '483px',
    transform: 'none',
    height: {
        sm: '100%',
        xs: '400px'
    },
    animationDelay: '-1s'
}
export const ProductContentStyles = {
    padding: '12px',
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column'
};
export const ProductContentHeaderStyles = {
    display: 'flex',
    gap: '10px',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: 1
};
export const StarsWrapperStyles = {
    bgcolor: '#6F64F8',
    borderRadius: '3px',
    display: 'flex',
    alignItems: 'center',
    padding: '6px',
    gap: '3px'
};
export const OldPriceStyles = {
    textDecoration: 'line-through',
    fontWeight: 300,
    fontSize: '10px',
    opacity: 0.6
};
export const PriceWrapperStyles = {
    display: 'flex',
    gap: '6px',
    alignItems: 'center',
    mb: 1
};
export const ProductContentInfoStyles = {
    display: 'flex',
    gap: '10px',
    justifyContent: 'space-between',
    alignItems: 'center'
};
export const ProductMediaStyles = {
    height: 0,
    paddingTop: '80%'
};
//// </--- Content ---/> ////
