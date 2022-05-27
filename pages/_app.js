
import Head from 'next/head'
import { ModalContextProvider } from '../contexts/modal-context'
import '../styles/globals.scss'


function MyApp({ Component, pageProps }) {
  return (
    <ModalContextProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </ModalContextProvider>

  )
}

export default MyApp
