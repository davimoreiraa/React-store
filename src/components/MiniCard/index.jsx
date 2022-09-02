/* ------------ STYLES ------------ */
import styles from './styles.module.css'

export default function MiniCard({ product }) {
  return (
    <div className={`${styles.mini_card} d-flex`}>
      <div className={`${styles.img_container} d-flex justify-content-center `}>
        <img src={`../../../images/${product.img}`} className={styles.product_img} width={70} height={70}/>
      </div>
      <div className={`${styles.product_infos} `}>
        <h1 className={`${styles.product_name} `}>{product.name}</h1>
        <p className={`${styles.price}`}>{product.price}</p>
      </div>
    </div>
  )
}