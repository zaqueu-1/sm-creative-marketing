import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/hero.css'
import '../styles/services.css'
import '../styles/card.css'
import '../styles/clients.css'
import '../styles/links-page.css'
import '../styles/dropdown.css'
import '../styles/services-page.css'
import '../styles/about.css'
import '../styles/contact.css'
import '../styles/footer.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <ToastContainer theme='dark' autoClose={1200} />
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
