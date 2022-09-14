/* ------------ STYLES ------------ */
import styles from './styles.module.css'

/* ------------ COMPONENTS ------------ */
import Image from 'next/Image'
import CartBox from '../CartBox'

/* ------------ RESOURCES ------------ */
import { useState } from "react";

/* ------------ IMAGES AND ICONS ------------ */
import Logo from '../../../public/images/store_icon.png'
import Cart from '../../../public/images/cart.svg'

export default function Header() {
  const [showCart, setShowCart] = useState(false)

  return (
    <header className={`${styles.header} d-flex align-items-center justify-content-between`}>
      <h1 className={`${styles.title} d-flex align-items-center`}>
        <div className={`${styles.logo_img_container}`}>
          <Image src={Logo} layout='responsive' />
        </div>
        <p className={`${styles.title}`}>React Store</p> 
      </h1>
      <button
       type="button" 
       className={`${styles.cart_btn} d-flex align-items-center justify-content-between rounded-2`}
       onClick={() => setShowCart(!showCart)}
       >
        <Image src={Cart} layout='intrinsic'/>
        <p className={styles.btn_text}>Cart</p> 
      </button>
      <CartBox showCart={showCart}/>
    </header>
  )
}