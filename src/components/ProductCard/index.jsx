/* ------------ STYLES ------------ */
import styles from './styles.module.css'

export default function ProductCard({name, type, price, img}) {
  return (
    <article className={`${styles.card} col-12 col-sm-8 col-md-5 col-xxl-3 d-flex align-items-center justify-content-center rounded-3`}>
      <div>
        <div className={`${styles.img_container} d-flex justify-content-center`}>
          <img src={`../../../images/${img}`} className={styles.product_img}/>
        </div>
        <h1>{name}</h1>
      </div>
    </article>
  )
}