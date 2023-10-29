import { styled } from "@mui/material";
import Link from "next/link";

export const NavLink = styled(Link)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    flex: '1 1 auto',
    textTransform: 'capitalize',
    color: '#fff',
    fontSize: 20,
    '&:hover': {
        color: theme.palette.primary.dark,
    },
}));

export const HomePageStyles = {
    minHeight: '100vh',
    bgcolor: 'secondary.main',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3
}
export const HomeContentStyles = {
    bgcolor: '#',
    borderRadius: '12px',
    maxWidth: '567px',
    padding: { md: '20px', xs: '10px 0' },
    marginTop: '-24px',
    flex: '0 0 50%',
    flexDirection: 'column',
    gap: 3,
    justifyContent: 'center',
}
export const TitleStyles = {
    fontWeight: 500,
    color: 'text.primary',
    fontSize: { md: '3.75rem', xs: '2.5rem' },
}
//// <--- Footer ---> ////
export const FooterStyles = {
    width: '100%',
    padding: 0,
    bgcolor: 'secondary.dark',
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
}
export const FooterContentStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: 4
}
export const FooterIconStyles = {
    width: 28,
    height: 28
}

//// <--- Header ---> ////
export const HeaderToolbarStyles = {
    alignItems: 'center',
    justifyContent: 'space-between'
}

export const HeaderIconStyles = {
    mr: 2,
    display: { sm: 'none' }
}
export const HeaderLinksStyles = {
    display: {
        xs: 'none',
        sm: 'flex',
    },
    gap: 4
}
export const HeaderDrawerStyles = {
    display: {
        xs: 'block',
        sm: 'none'
    },
    '& .MuiDrawer-paper': {
        boxSizing: 'border-box',
        width: 240,
        background: 'background'
    },
    '& ul': {
        padding: '30px',
    },
}