import { CarouselProductProps } from '@/utils/types';
import { Box } from '@mui/material';
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselImageStyles } from './ui';
import Image from 'next/image';


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
                    <Image src={image} alt='product image' width={800} height={600} layout="responsive" />
                </Box>
            ))}
        </Carousel>
    )
}