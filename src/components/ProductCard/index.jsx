/* ------------ STYLES ------------ */
import styles from './styles.module.css'

/* ------------ COMPONENTS ------------ */
import Image from 'next/Image'

export default function ProductCard({name, type, price, img}) {
  return (
    <article className={`${styles.card} d-inline-flex rounded-3`}>
      <h1>{name}</h1>
    </article>
  )
}