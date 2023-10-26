import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#7E72F2',
            dark: '#6F64F8'
        },
        secondary: {
            main: '#0F1642',
        },
        background: {
            default: '#2B3253',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#2C2C20',
        },
    },
    typography: {
        fontFamily: 'Montserrat, sans-serif',
    },
    components: {
        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundColor: '#6F64F8',
                },
            },
        },
    },
},

);

export default theme;
