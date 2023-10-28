import React from 'react'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Box, Stack } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import { ImagesModalProps } from '@/utils/types';
import { ButtonStyles, CarouselImageStyles, ModalImagesStyles } from './ui';


export const ImagesModal: React.FC<ImagesModalProps> = ({ images }) => {
    const [open, setOpen] = React.useState(false);

    return (
        <Stack>
            <Button onClick={() => setOpen(true)} variant='contained' size='large' sx={ButtonStyles}>See Closely</Button>
            <Modal
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