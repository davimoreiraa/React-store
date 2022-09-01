/* ------------ STYLES ------------ */
import styles from './styles.module.css'

export default function MiniCard({ product }) {
  return (
    <div className={`${styles.mini_card}`}>
      {product.name}
    </div>
  )
}