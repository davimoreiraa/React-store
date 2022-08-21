/* ------------ STYLES ------------ */
import styles from './styles.module.css'

/* ------------ COMPONENTS ------------ */
import Image from 'next/Image'


export default function ProductCard({name, type, price, img}) {
  return (
    <article className={`${styles.card} d-inline-flex rounded-3`}>
      <div className={`${styles.img_container}`}>
        <img src={`../../../images/${img}`} className={styles.img}/>
      </div>
      <h1>{name}</h1>
    </article>
  )
}