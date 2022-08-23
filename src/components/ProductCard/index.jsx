/* ------------ STYLES ------------ */
import styles from './styles.module.css'

/* ------------ ICONS ------------ */
import Cart from '../../../public/images/cart.svg'

export default function ProductCard({name, type, price, img}) {
  return (
    <article className={`${styles.card} col-12 col-sm-8 col-md-5 col-xxl-3 rounded-3`}>
        <div className={`d-flex justify-content-center`}>
          <div className={`${styles.img_container} d-flex justify-content-center`}>
            <img src={`../../../images/${img}`} className={styles.product_img}/>
          </div>
        </div>
        <div className={`d-flex`}>
          <div className={`${styles.infos}`}>
            <p className={styles.name}>{name}</p>
            <p className={styles.type}>{type}</p>
            <p className={styles.price}>{price}</p>
          </div>
        <div>
          <button className={`${styles.cart_btn}`}>  </button>
        </div>
        </div>
    </article>
  )
}