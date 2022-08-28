/* ------------ STYLES ------------ */
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

/* ------------ RESOURCES ------------ */
import Products from '../Context/Products'

function MyApp({ Component, pageProps }) {
  return (
    <Products.Provider>
      <Component {...pageProps} />
    </Products.Provider>
  )
}

export default MyApp
