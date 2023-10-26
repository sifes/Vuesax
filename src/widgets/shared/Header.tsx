import * as React from 'react';
import { AppBar, styled } from '@mui/material';
import { Box } from '@mui/material';
import { Drawer } from '@mui/material';
import { IconButton } from '@mui/material';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Toolbar } from '@mui/material';
import { Logo } from '@/widgets/shared/Logo';
import Link from 'next/link';

const NavLink = styled(Link)(({ theme }) => ({
    color: '#0F1642',
    display: 'flex',
    alignItems: 'center',
    flex: '1 1 auto',
    textTransform: 'capitalize',
    '&:hover': {
        color: theme.palette.primary.dark,
    },
}));

export function Header() {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    return (
        <Box sx={{ display: 'flex', bgcolor: 'secondary.dark' }}>
            <AppBar component="nav" color='secondary' position='static'>
                <Toolbar sx={{ alignItems: 'center', justifyContent: 'space-between' }} >
                    <Logo />
                    <IconButton
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                        color='primary'
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: { xs: 'none', sm: 'flex', gap: 48 } }}>
                        <NavLink href='/' sx={{ color: '#fff', fontSize: 20 }}>Home</NavLink>
                        <NavLink href='/products' sx={{ color: '#fff', fontSize: 20 }}>Products</NavLink>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true, }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, background: 'background' },
                    }}>
                    <List sx={{ padding: '30px' }}>
                        <ListItem disablePadding>
                            <NavLink href='/' sx={{ color: 'text.main', fontSize: 24 }}>Home</NavLink>
                        </ListItem>
                        <ListItem disablePadding>
                            <NavLink href='/contacts' sx={{ color: 'text.main', fontSize: 24 }}>Contacts</NavLink>
                        </ListItem>
                        <ListItem disablePadding>
                            <NavLink href='/products' sx={{ color: 'text.main', fontSize: 24 }}>Products</NavLink>
                        </ListItem>
                    </List>
                </Drawer>
            </nav>
        </Box>
    );
}
