import * as React from 'react';
import { AppBar } from '@mui/material';
import { Box } from '@mui/material';
import { Drawer } from '@mui/material';
import { IconButton } from '@mui/material';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemButton } from '@mui/material';
import { ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import Image from 'next/image';


const navItems = ['Home', 'Contact', 'Products'];

export function Header() {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" color='secondary'>
                <Toolbar >
                    <Image src={require('../assets/logo.png')} alt='logo' />
                    <Typography variant="subtitle1" sx={{ ml: '12px', flexGrow: 1 }} color='primary'>Vuesax</Typography>
                    <IconButton
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                        color='primary'
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: 'text.main', fontSize: 18 }} >
                                {item}
                            </Button>
                        ))}
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
                    }}
                >
                    <List sx={{ padding: '30px 0 0 0' }}>
                        {navItems.map((item) => (
                            <ListItem key={item} disablePadding>
                                <ListItemButton sx={{ textAlign: 'center' }}>
                                    <ListItemText primary={item} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </nav>
        </Box>
    );
}
