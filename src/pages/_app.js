/* ------------ STYLES ------------ */
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

/* ------------ RESOURCES ------------ */
import { useState } from 'react'

/* ------------ CONTEXT ------------ */
import Cart from '../Context/Cart'
import Filter from '../Context/Filter'

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([])
  const [filter, setFilter] = useState([])

  return (
    <Cart.Provider value={[cart, setCart]}>
      <Filter.Provider value={[filter, setFilter]}>
        <Component {...pageProps} />
      </Filter.Provider>
    </Cart.Provider>
  )
}

export default MyApp
