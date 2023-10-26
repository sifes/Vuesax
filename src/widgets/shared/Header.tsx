import * as React from 'react';
import { AppBar } from '@mui/material';
import { Box } from '@mui/material';
import { Drawer } from '@mui/material';
import { IconButton } from '@mui/material';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Toolbar } from '@mui/material';
import { Logo } from '@/widgets/shared/ui/Logo';
import { NavLink } from './ui';

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
                        <NavLink href='/'>Home</NavLink>
                        <NavLink href='/products'>Products</NavLink>
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
                        <ListItem >
                            <NavLink href='/'>Home</NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink href='/products'>Products</NavLink>
                        </ListItem>
                    </List>
                </Drawer>
            </nav>
        </Box>
    );
}
