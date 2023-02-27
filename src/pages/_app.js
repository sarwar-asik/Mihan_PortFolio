import '@/styles/globals.css'

import Footer from './shared/Footer/Footer'
import Navbar from './shared/Navbar/Navbar'

export default function App({ Component, pageProps }) {
  return <>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </>
}
