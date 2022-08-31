/* ------------ STYLES ------------ */
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

/* ------------ RESOURCES ------------ */
import Products from '../Context/Products'
import { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const [products, setProducts] = useState([])
  useEffect(() => {
    console.log(products)
  })

  return (
    <Products.Provider value={[products, setProducts]}>
      <Component {...pageProps} />
    </Products.Provider>
  )
}

export default MyApp
