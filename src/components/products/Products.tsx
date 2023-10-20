import React from 'react'
import { Grid, Card, CardContent, Typography, CardActions, Button, CardMedia, Box, Skeleton } from '@mui/material'
import { IProduct } from '@/pages/products'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
interface IProducts {
    products: IProduct[]
    isLoading: boolean
}
export const Products: React.FC<IProducts> = ({ products = [], isLoading }) => {
    return (
        <Grid container spacing={{ md: 4, xs: 2 }} height={1} justifyContent={'center'} >

            {isLoading ?
                [1, 2, 3, 4, 5, 6].map((item) =>
                (<Grid key={item} item xl={4} md={4} xs={12} sm={6} sx={{ maxHeight: '483px', maxWidth: '369px' }}  >
                    <Skeleton key={item} width={'100%'} sx={{ maxWidth: '369px', maxHeight: '483px', transform: 'none', height: { sm: '100%', xs: '400px' }, animationDelay: '-1s' }} >
                    </Skeleton>
                </Grid>))
                :
                products.map(({ title, thumbnail, id, category, brand, price, discountPercentage, rating }) => (
                    <Grid key={id} item xl={4} md={4} xs={12} sm={6} sx={{ maxWidth: '369px' }}  >
                        <Card sx={{ bgcolor: 'secondary.main', height: 1, display: 'flex', flexDirection: 'column' }} key={id}>
                            <CardMedia sx={{ height: 0, paddingTop: '80%' }} image={thumbnail} title={title} />
                            <CardContent sx={{ padding: '12px', flex: '1 1 auto', display: 'flex', flexDirection: 'column' }}>
                                <Box sx={{ display: 'flex', gap: '10px', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Box sx={{ bgcolor: '#6F64F8', borderRadius: '3px', display: 'flex', alignItems: 'center', padding: '6px', gap: '3px' }}>
                                        {rating.toFixed(1)}
                                        <StarBorderIcon sx={{ color: '#fff' }} />
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: '6px', alignItems: 'center', mb: 1 }}>
                                        <Typography variant='subtitle1' sx={{ fontWeight: 600 }}  >${price}</Typography>
                                        <Typography sx={{ textDecoration: 'line-through', fontWeight: 300, fontSize: '10px', opacity: 0.6 }} variant='body2'>${(price + price * discountPercentage / 100).toFixed(0)}</Typography>
                                    </Box>
                                </Box>
                                <Typography sx={{ mb: '8px', flex: '1 1 auto' }} variant='h6'>{title}</Typography>
                                <Box sx={{ display: 'flex', gap: '10px', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant='subtitle2' sx={{ fontWeight: 300, fontSize: '12px' }}>{brand}</Typography>
                                    <Typography variant='subtitle2' sx={{ fontSize: '12px' }}>{category}</Typography>
                                </Box>
                            </CardContent>
                            <CardActions  >
                                <Button sx={{ width: 1 }} size="small" variant='contained' >Learn More <ArrowRightAltIcon></ArrowRightAltIcon></Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))
            }
        </Grid>

    )
}
