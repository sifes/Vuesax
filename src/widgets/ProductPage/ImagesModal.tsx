import React from 'react'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Box, Stack } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import { ImagesModalProps } from '@/utils/types';
import { CarouselImageStyles, ModalImagesStyles } from './ui';


export const ImagesModal: React.FC<ImagesModalProps> = ({ images }) => {
    const [open, setOpen] = React.useState(false);

    return (
        <Stack>
            <Button onClick={() => setOpen(true)} variant='contained' size='large' sx={{ borderRadius: '12px', margin: '0 auto' }}>See Closely</Button>
            <Modal
                sx={{}}
                open={open}
                onClose={() => setOpen(false)}
            >
                <Box sx={ModalImagesStyles}>
                    <Carousel
                        dynamicHeight
                        centerMode
                        centerSlidePercentage={100}
                        infiniteLoop
                        showArrows
                    >
                        {images.map(image => (
                            <Box key={image} sx={CarouselImageStyles}>
                                <img src={image} alt='product image' />
                            </Box>
                        ))}
                    </Carousel>
                </Box>
            </Modal>
        </Stack>

    )
}