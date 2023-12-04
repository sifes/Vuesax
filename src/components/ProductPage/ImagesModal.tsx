import React from 'react'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Box, Stack } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import { ImagesModalProps } from 'src/utils/types'
import { ButtonStyles, CarouselImageStyles, ModalImagesStyles } from './ui';
import Image from 'next/legacy/image';


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
                                {/*
                                   @comment add object-fit:cover to fit image in a container
                                */}
                                <Image src={image} alt='product image' width={800} height={600} layout="responsive" />
                            </Box>
                        ))}
                    </Carousel>
                </Box>
            </Modal>
        </Stack>

    )
}
