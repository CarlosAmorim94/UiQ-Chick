import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { GlobalStyle } from '../styles/GlobalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />


    </>
  )
}

export default MyApp
