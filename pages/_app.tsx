import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { defaultTheme } from '../styles/theme'
import '../styles/index.css'

const MyApp: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Head>
        <title>INSAT IEEE day </title>
        <link rel="icon" type="image/png" href="/icon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
      <script
        async
        defer
        src="https://scripts.simpleanalyticscdn.com/latest.js"
      ></script>
      <noscript>
        <img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" />
      </noscript>
    </ThemeProvider>
  )
}

export default MyApp
