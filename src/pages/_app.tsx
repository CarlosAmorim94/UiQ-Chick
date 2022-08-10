import type { AppProps } from 'next/app'
import { Header } from '../components/Header'

import { GlobalStyle } from '../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {

  const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Component {...pageProps} />


    </ThemeProvider>
  )
}

export default MyApp
