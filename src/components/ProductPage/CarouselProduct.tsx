import { CarouselProductProps } from 'src/utils/types'
import { Box } from '@mui/material'
import React from 'react'
import dynamic from 'next/dynamic'
import { CarouselImageStyles } from './ui'
import Image from 'next/image'

const Carousel = dynamic(
  () => import('react-responsive-carousel').then((mod) => mod.Carousel),
  { ssr: false }
) as any

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
          <Image
            src={image}
            alt='product image'
            width={800}
            height={600}
            layout='responsive'
          />
        </Box>
      ))}
    </Carousel>
  )
}
