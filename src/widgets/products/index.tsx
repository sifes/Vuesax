import React from 'react'
import { Grid, Card, CardContent, Typography, CardActions, Button, CardMedia, Box, Skeleton } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { ProductsProps } from '@/utils/types';
import { BrandStyles, CategoryStyles, GridProductsStyles, GridSkeletonStyles, OldPriceStyles, PriceStyles, PriceWrapperStyles, ProductContentHeaderStyles, ProductContentInfoStyles, ProductContentStyles, ProductMediaStyles, ProductStyles, SkeletonStyles, StarsWrapperStyles, TitleStyles } from './ui';
import Link from 'next/link';

export const Products: React.FC<ProductsProps> = ({ products, page }) => {
    const [isLoading, setIsLoading] = React.useState(!products)
    const [currentProducts, setCurrentProducts] = React.useState(products)
    const currentPage = localStorage.getItem('currentPage') ? Number(localStorage.getItem('currentPage')) : page

    React.useEffect(() => {
        setCurrentProducts(products.slice(15 * (currentPage - 1), currentPage * 15))
        setIsLoading(false)
    }, [currentPage, products])

    return (
        <Grid container spacing={{ md: 4, xs: 2 }} justifyContent={'center'} >
            {isLoading ?
                [1, 2, 3, 4, 5, 6].map((item) =>
                (<Grid key={item} item xl={4} md={4} xs={12} sm={6} sx={GridSkeletonStyles}  >
                    <Skeleton key={item} width={'100%'} sx={SkeletonStyles} >
                    </Skeleton>
                </Grid>))
                :
                currentProducts.map(({ title, thumbnail, id, category, brand, price, discountPercentage, rating }) => (
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
                ))
            }
        </Grid>
    )
}
