import React from 'react'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Box, Stack } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
interface ImagesModalProps {
    images: string[]
}

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
                <Box sx={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translate(-50%, 0)',
                    margin: '20px 0',
                    width: '80vw',
                    bgcolor: '#2B3253',
                    border: '2px solid #000',
                    boxShadow: 24,
                    borderRadius: '12px',
                    p: 4,
                    padding: { md: '32px !important', sm: '16px !important', xs: '8px !important' },
                    overflowY: 'auto',
                    maxHeight: '90vh'
                }}>
                    <Carousel
                        dynamicHeight
                        centerMode
                        centerSlidePercentage={100}
                        infiniteLoop
                        showArrows
                    >
                        {images.map(image => (
                            <Box key={image} sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '4px', overflow: 'hidden' }}>
                                <img src={image} alt='product image' />
                            </Box>
                        ))}
                    </Carousel>
                </Box>
            </Modal>
        </Stack>

    )
}