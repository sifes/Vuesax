import { CarouselProductProps } from '@/utils/types';
import { Box } from '@mui/material';
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselImageStyles } from './ui';


export const CarouselProduct: React.FC<CarouselProductProps> = ({ images }) => {
    return (
        <Carousel
            dynamicHeight
            centerMode
            centerSlidePercentage={100}
            width={'100%'}
            infiniteLoop
            showArrows
        >
            {images.map(image => (
                <Box key={image} sx={CarouselImageStyles}>
                    <img src={image} alt='product image' />
                </Box>
            ))}
        </Carousel>
    )
}