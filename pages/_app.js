
import Head from 'next/head'
import { HttpContextProvider } from '../contexts/http-context'
import { ModalContextProvider } from '../contexts/modal-context'
import '../styles/globals.scss'


function MyApp({ Component, pageProps }) {
  return (
    <HttpContextProvider>
      <ModalContextProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </ModalContextProvider>
    </HttpContextProvider>

  )
}

export default MyApp
