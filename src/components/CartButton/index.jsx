/* ------------ STYLES ------------ */
import styles from './styles.module.css'

/* ------------ ICONS ------------ */
import { AiOutlineShoppingCart } from 'react-icons/ai';

export default function CartButton() {
  return (
    <button className={`${styles.cart_btn} rounded-3`}> <AiOutlineShoppingCart/> </button>
  )
}