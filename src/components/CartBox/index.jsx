/* ------------ STYLES ------------ */
import styles from './styles.module.css'

/* ------------ COMPONENTS ------------ */
import MiniCard from '../MiniCard'

export default function CartBox() {
  return (
    <div className={`${styles.card_box} position-absolute end-0`}>
      <MiniCard />
    </div>
  )
}