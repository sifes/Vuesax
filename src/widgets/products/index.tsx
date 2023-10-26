import React from 'react'
import { Grid, Card, CardContent, Typography, CardActions, Button, CardMedia, Box, Skeleton, Stack } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { ProductsProps } from '@/utils/types';
import { OldPriceStyles, PriceWrapperStyles, ProductContentHeaderStyles, ProductContentInfoStyles, ProductContentStyles, ProductMediaStyles, ProductStyles, StarsWrapperStyles } from './ui';

export const Products: React.FC<ProductsProps> = ({ products = [], currentPage }) => {
    const [isLoading, setIsLoading] = React.useState(true)
    const [currentProducts, setCurrentProducts] = React.useState(products)

    React.useEffect(() => {
        setCurrentProducts(products.slice(15 * (currentPage - 1), currentPage * 15))
        setIsLoading(false)
    }, [currentPage, products])
    return (
        <Grid container spacing={{ md: 4, xs: 2 }} justifyContent={'center'} >
            {isLoading ?
                [1, 2, 3, 4, 5, 6].map((item) =>
                (<Grid key={item} item xl={4} md={4} xs={12} sm={6} sx={{ maxHeight: '483px', maxWidth: '369px' }}  >
                    <Skeleton key={item} width={'100%'} sx={{ maxWidth: '369px', maxHeight: '483px', transform: 'none', height: { sm: '100%', xs: '400px' }, animationDelay: '-1s' }} >
                    </Skeleton>
                </Grid>))
                :
                currentProducts.map(({ title, thumbnail, id, category, brand, price, discountPercentage, rating }) => (
                    <Grid key={id} item xl={4} md={4} xs={12} sm={6} sx={{ maxWidth: '369px' }}  >
                        <Card sx={ProductStyles} key={id}>
                            <CardMedia sx={ProductMediaStyles} image={thumbnail} title={title} />
                            <CardContent sx={ProductContentStyles}>
                                <Box sx={ProductContentHeaderStyles}>
                                    <Box sx={StarsWrapperStyles}>
                                        {rating.toFixed(1)}
                                        <StarBorderIcon sx={{ color: '#fff' }} />
                                    </Box>
                                    <Box sx={PriceWrapperStyles}>
                                        <Typography variant='subtitle1' sx={{ fontWeight: 600 }}  >${price}</Typography>
                                        <Typography sx={OldPriceStyles} variant='body2'>${(price + price * discountPercentage / 100).toFixed(0)}</Typography>
                                    </Box>
                                </Box>
                                <Typography sx={{ mb: '8px', flex: '1 1 auto' }} variant='h6'>{title}</Typography>
                                <Box sx={ProductContentInfoStyles}>
                                    <Typography variant='subtitle2' sx={{ fontWeight: 300, fontSize: '12px' }}>{brand}</Typography>
                                    <Typography variant='subtitle2' sx={{ fontSize: '12px' }}>{category}</Typography>
                                </Box>
                            </CardContent>
                            <CardActions  >
                                <Button fullWidth size="small" variant='contained' >Learn More <ArrowRightAltIcon></ArrowRightAltIcon></Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))
            }
        </Grid>

    )
}
