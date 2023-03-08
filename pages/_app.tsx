import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "../styles/globals.css"
import Header from '../components/Header'
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
   <>
    <Header />
    <Component {...pageProps} />
    <Analytics />
    </>
  )
}

export default MyApp
