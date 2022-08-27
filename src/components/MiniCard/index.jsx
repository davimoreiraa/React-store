/* ------------ STYLES ------------ */
import styles from './styles.module.css'

export default function MiniCard() {
  return (
    <button className={`${styles.cart_btn} rounded-3`}><AiOutlineShoppingCart/></button>
  )
}