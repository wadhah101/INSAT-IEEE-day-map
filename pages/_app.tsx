import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { defaultTheme } from '../styles/theme'
import '../styles/index.css'
import { up } from 'styled-breakpoints'

const Global = createGlobalStyle`
html {
      font-size: 16px;
    }
  ${up('md')} {
    html {
      font-size: 13px;
    }
  }
  ${up('xl')} {
    html {
      font-size: 16px;
    }
  }

`

const MyApp: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Head>
        <title>INSAT IEEE day </title>
        <link rel="icon" type="image/png" href="/icon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="Description"
          content="ieee day map for ieee insat student branch , containing an interactive map for all of our chapters , chaper description  and chapter gallery link to google meet conference and  form to join ieee insat "
        />
      </Head>
      <Global />
      <Component {...pageProps} />
      <script
        async
        defer
        src="https://scripts.simpleanalyticscdn.com/latest.js"
      />
      <noscript>
        <img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" />
      </noscript>
    </ThemeProvider>
  )
}

export default MyApp
