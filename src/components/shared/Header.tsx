import * as React from 'react';
import { AppBar } from '@mui/material';
import { Box } from '@mui/material';
import { Drawer } from '@mui/material';
import { IconButton } from '@mui/material';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Toolbar } from '@mui/material';
import { HeaderDrawerStyles, HeaderIconStyles, HeaderLinksStyles, HeaderToolbarStyles, NavLink } from './ui';
import { Logo } from './ui/Logo';

export function Header() {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    return (
        <Box sx={{ display: 'flex', bgcolor: 'secondary.dark' }}>
            <AppBar component="nav" color='secondary' position='static'>
                <Toolbar sx={HeaderToolbarStyles} >
                    <Logo />
                    <IconButton
                        onClick={handleDrawerToggle}
                        sx={HeaderIconStyles}
                        color='primary'
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={HeaderLinksStyles}>
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
                    sx={HeaderDrawerStyles}>
                    <List >
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
