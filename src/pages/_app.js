/* ------------ STYLES ------------ */
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

/* ------------ RESOURCES ------------ */
import Cart from '../Context/Cart'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([])

  return (
    <Cart.Provider value={[cart, setCart]}>
      <Component {...pageProps} />
    </Cart.Provider>
  )
}

export default MyApp
