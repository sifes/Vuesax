import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
interface CarouselProductProps {
    images: string[]
}

export const CarouselProduct: React.FC<CarouselProductProps> = ({ images }) => {
    function onChange(index: number, item: React.ReactNode) {


    }
    function onClickItem() {

    }
    function onClickThumb() {

    }

    return (
        <Carousel
            dynamicHeight
            centerMode
            centerSlidePercentage={100}
            width={'100%'}
            infiniteLoop
            showArrows
            onChange={onChange}
            onClickItem={onClickItem}
            onClickThumb={onClickThumb}>
            {images.map(image => (
                <Box sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '4px', overflow: 'hidden' }}>
                    <img src={image} alt='product image' />
                </Box>
            ))}
        </Carousel>
    )
}