/* ------------ STYLES ------------ */
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

/* ------------ RESOURCES ------------ */
import Products from '../Context/Products'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [products, setProducts] = useState(0)

  return (
    <Products.Provider value={[products, setProducts]}>
      <Component {...pageProps} />
    </Products.Provider>
  )
}

export default MyApp
