import * as React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Box, CssBaseline } from '@mui/material';
import Head from 'next/head'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <title>Vuesax</title>
                <meta name="description" content="e-commerce task for dev" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <CssBaseline />
                <Header />
                <main style={{ flex: '1 1 auto', height: 1 }}>{children}</main>
                <Footer />
            </Box>
        </>

    )
}
