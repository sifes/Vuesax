import { Typography, styled } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const StyledLink = styled(Link)(({ theme }) => ({
    color: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
}));

export const Logo = () => {
    return (
        <StyledLink href='/'>
            <Image src={require('../../../assets/logo.png')} alt='logo' />
            <Typography variant="subtitle1" sx={{ ml: '12px', flexGrow: 1, fontSize: 24 }} color='primary'>Vuesax</Typography>
        </StyledLink>
    )
}


