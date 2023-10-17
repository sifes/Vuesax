import * as React from 'react';
import { AppBar, styled } from '@mui/material';
import { Box } from '@mui/material';
import { Drawer } from '@mui/material';
import { IconButton } from '@mui/material';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemButton } from '@mui/material';
import { ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Toolbar } from '@mui/material';
import { Logo } from '@/ui/Logo';
import Link from 'next/link';

const NavLink = styled(Link)(({ theme }) => ({
    color: theme.palette.primary.main,
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
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" color='secondary' position='static'>
                <Toolbar >
                    <Logo />
                    <IconButton
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                        color='primary'
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: { xs: 'none', sm: 'flex', gap: 48 } }}>
                        <NavLink href='/' sx={{ color: 'text.main', fontSize: 24 }}>Home</NavLink>
                        <NavLink href='/contacts' sx={{ color: 'text.main', fontSize: 24 }}>Contacts</NavLink>
                        <NavLink href='/products' sx={{ color: 'text.main', fontSize: 24 }}>Products</NavLink>
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
