
import { ModalContextProvider } from '../contexts/modal-context'
import '../styles/globals.scss'


function MyApp({ Component, pageProps }) {
  return (
    <ModalContextProvider>
      <Component {...pageProps} />
    </ModalContextProvider>

  )
}

export default MyApp
