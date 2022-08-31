/* ------------ STYLES ------------ */
import styles from './styles.module.css'

/* ------------ ICONS ------------ */
import { AiOutlineShoppingCart } from 'react-icons/ai';

export default function CartButton({ pushProduct, id }) {
  return (
    <button 
    className={`${styles.cart_btn} rounded-3`} onClick={() => pushProduct(id)} >
      <AiOutlineShoppingCart/>
    </button>
  )
}