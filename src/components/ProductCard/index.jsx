/* ------------ STYLES ------------ */
import styles from './styles.module.css'

/* ------------ COMPONENTS ------------ */
import Image from 'next/Image'

export default function ProductCard({name }) {
  return (
    <article className={`${styles.card}`}>
      <h1>{name}</h1>
    </article>
  )
}