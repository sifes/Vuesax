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
export const PaginationProductsStyles = {
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



// import React from 'react'
// import { Grid, Typography, CardActions, Button, CardMedia, Box, Skeleton, Stack } from '@mui/material'
// import StarBorderIcon from '@mui/icons-material/StarBorder';
// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
// import { ProductsProps } from '@/utils/types';
// import { OldPrice, PriceWrapper, Product, ProductContent, ProductContentHeader, ProductContentInfo, ProductMedia, SkeletonStyles, StarsWrapper } from './ui';

// export const Products: React.FC<ProductsProps> = ({ products = [], currentPage }) => {
//     const [isLoading, setIsLoading] = React.useState(true)
//     const [currentProducts, setCurrentProducts] = React.useState(products)

//     React.useEffect(() => {
//         setCurrentProducts(products.slice(15 * (currentPage - 1), currentPage * 15))
//         setIsLoading(false)
//     }, [currentPage, products])
//     return (
//         <Grid container spacing={{ md: 4, xs: 2 }} justifyContent={'center'} >
//             {isLoading ?
//                 [1, 2, 3, 4, 5, 6].map((item) =>
//                 (<Grid key={item} item xl={4} md={4} xs={12} sm={6} sx={{ maxHeight: '483px', maxWidth: '369px' }}  >
//                     <Skeleton width={'100%'} sx={SkeletonStyles} >
//                     </Skeleton>
//                 </Grid>))
//                 :
//                 currentProducts.map(({ title, thumbnail, id, category, brand, price, discountPercentage, rating }) => (
//                     <Grid key={id} item xl={4} md={4} xs={12} sm={6} sx={{ maxWidth: '369px' }}  >
//                         <Product>
//                             <ProductMedia image={thumbnail} title={title} />
//                             <ProductContent>
//                                 <ProductContentHeader>
//                                     <StarsWrapper> {rating.toFixed(1)}<StarBorderIcon sx={{ color: '#fff' }} /> </StarsWrapper>
//                                     <PriceWrapper>
//                                         <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>${price}</Typography>
//                                         <OldPrice variant='body2'>${(price + price * discountPercentage / 100).toFixed(0)}</OldPrice>
//                                     </PriceWrapper>
//                                 </ProductContentHeader>
//                                 <Typography sx={{ mb: '8px', flex: '1 1 auto' }} variant='h6'>{title}</Typography>
//                                 <ProductContentInfo >
//                                     <Typography variant='subtitle2' sx={{ fontWeight: 300, fontSize: '12px' }}>{brand}</Typography>
//                                     <Typography variant='subtitle2' sx={{ fontSize: '12px' }}>{category}</Typography>
//                                 </ProductContentInfo>
//                             </ProductContent>
//                             <CardActions  >
//                                 <Button size="small" sx={{ width: 1 }} variant='contained'>Learn More <ArrowRightAltIcon /></Button>
//                             </CardActions>
//                         </Product>
//                     </Grid>
//                 ))}
//         </Grid>
//     )
// }
