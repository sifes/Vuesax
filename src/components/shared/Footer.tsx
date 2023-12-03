import * as React from 'react';
import { Box, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import { FooterContentStyles, FooterIconStyles, FooterStyles } from './ui';
import { Logo } from './ui/Logo';

export function Footer() {
    return (
        <Box sx={FooterStyles} component="footer"  >
            <Box sx={FooterContentStyles}>
                <IconButton color='primary' href='https://t.me' target="_blank" rel="noopener noreferrer">
                    <TelegramIcon sx={FooterIconStyles} />
                </IconButton>
                <Logo />
                <IconButton color='primary' href='https://github.com/sifes' target="_blank" rel="noopener noreferrer" >
                    <GitHubIcon sx={FooterIconStyles} />
                </IconButton>
            </Box>
        </Box >
    );
}
