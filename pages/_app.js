
import Head from 'next/head'
import { HttpContextProvider } from '../contexts/http-context'
import { ModalContextProvider } from '../contexts/modal-context'
import '../styles/globals.scss'


function MyApp({ Component, pageProps }) {
  return (
    <HttpContextProvider>
      <ModalContextProvider>
        <Head>
          <title>AIM Development - Domy modułowe oraz domy mobilne</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="max-image-preview:large"></meta>
          <meta name='title' content='AIM Development - Domy modułowe oraz domy mobilne'></meta>
          <meta name="description" content="" />
        </Head>
        <Component {...pageProps} />
      </ModalContextProvider>
    </HttpContextProvider>

  )
}

export default MyApp
