import React from 'react'
import { Grid, Card, CardContent, Typography, CardActions, Button, CardMedia, Box } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { ProductsProps } from 'src/utils/types';
import { BrandStyles, CategoryStyles, GridProductsStyles, NoProductStyles, OldPriceStyles, PriceStyles, PriceWrapperStyles, ProductContentHeaderStyles, ProductContentInfoStyles, ProductContentStyles, ProductMediaStyles, ProductStyles, SkeletonStyles, StarsWrapperStyles, TitleStyles } from './ui';
import Link from 'next/link';
import { useLocalStorage } from 'src/hooks/useLocalStorage';
import NoProductsIcon from '@mui/icons-material/ProductionQuantityLimits';
export const Products: React.FC<ProductsProps> = ({ products, page }) => {
    const [currentProducts, setCurrentProducts] = React.useState(products)
    const [storedPage] = useLocalStorage('currentPage', page)

    React.useEffect(() => {
        setCurrentProducts(products.slice(15 * (page - 1), page * 15))
        return () => {
            setCurrentProducts([])
        }
    }, [storedPage, products, page, setCurrentProducts])

    return (
        products.length === 0 ?
            <Box sx={NoProductStyles} >
                <Typography variant='h5'>No products has been found</Typography>
                <NoProductsIcon fontSize='large' />
            </Box>
            :
            <Grid container spacing={{ md: 4, xs: 2 }} justifyContent={'center'} >
                {currentProducts.map(({ title, thumbnail, id, category, brand, price, discountPercentage, rating }) => (
                    <Grid key={id} item xl={4} md={4} xs={12} sm={6} sx={GridProductsStyles}  >
                        <Card sx={ProductStyles} key={id}>
                            <CardMedia sx={ProductMediaStyles} image={thumbnail} title={title} />
                            <CardContent sx={ProductContentStyles}>
                                <Box sx={ProductContentHeaderStyles}>
                                    <Box sx={StarsWrapperStyles}>
                                        {rating.toFixed(1)}
                                        <StarBorderIcon />
                                    </Box>
                                    <Box sx={PriceWrapperStyles}>
                                        <Typography variant='subtitle1' sx={PriceStyles}>${price}</Typography>
                                        <Typography sx={OldPriceStyles} variant='body2'>${(price + price * discountPercentage / 100).toFixed(0)}</Typography>
                                    </Box>
                                </Box>
                                <Typography sx={TitleStyles} variant='h6'>{title}</Typography>
                                <Box sx={ProductContentInfoStyles}>
                                    <Typography variant='subtitle2' sx={BrandStyles}>{brand}</Typography>
                                    <Typography variant='subtitle2' sx={CategoryStyles}>{category}</Typography>
                                </Box>
                            </CardContent>
                            <CardActions>
                                <Link href={`/products/${id}`}>
                                    <Button fullWidth size="small" variant='contained'>Learn More <ArrowRightAltIcon></ArrowRightAltIcon></Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>

    )
}


{/* <Grid key={item} item xl={4} md={4} xs={12} sm={6} sx={GridSkeletonStyles}  >
    <Skeleton key={item} width={'100%'} sx={SkeletonStyles} >
    </Skeleton>
</Grid> */}