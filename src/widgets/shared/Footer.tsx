import * as React from 'react';
import { Box, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Logo } from '@/widgets/shared/ui/Logo';
import { FooterContentStyles, FooterStyles } from './ui';

export function Footer() {
    return (
        <Box sx={FooterStyles} component="footer"  >
            <Box sx={FooterContentStyles}>
                <IconButton color='primary' href='https://t.me/notsifes' target="_blank" rel="noopener noreferrer">
                    <TelegramIcon sx={{ width: 28, height: 28 }} />
                </IconButton>
                <Logo />
                <IconButton color='primary' href='https://github.com/sifes' target="_blank" rel="noopener noreferrer" >
                    <GitHubIcon sx={{ width: 28, height: 28 }} />
                </IconButton>
            </Box>
        </Box >
    );
}
