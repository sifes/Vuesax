import 'src/styles/globals.css'
import theme from 'src/styles/theme'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import createEmotionCache from '../utils/createEmotionCache';
import Layout from 'src/components/shared/Layout'
interface MyAppProps extends AppProps {
  emotionCache?: any;
}

const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  )
}
