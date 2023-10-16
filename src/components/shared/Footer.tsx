import * as React from 'react';
import { Box, Paper, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Logo } from '@/ui/Logo';

export function Footer() {
    return (
        <Paper sx={{
            width: '100%',
            background: 'background',
        }} component="footer" square variant="elevation" >
            <Box sx={{
                flexGrow: 1,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                my: 1
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <IconButton color='primary' href='https://t.me/notsifes' target="_blank" rel="noopener noreferrer">
                        <TelegramIcon sx={{ width: 32, height: 32 }} />
                    </IconButton>
                    <Logo></Logo>
                    <IconButton color='primary' href='https://github.com/sifes' target="_blank" rel="noopener noreferrer" >
                        <GitHubIcon sx={{ width: 32, height: 32 }} />
                    </IconButton>
                </Box>
            </Box>

        </Paper >
    );
}
