/* ------------ STYLES ------------ */
import styles from './styles.module.css'

/* ------------ COMPONENTS ------------ */
import CartButton from '../CartButton'

export default function ProductCard({product, pushProduct}) {
  return (
    <article className={`${styles.card} col-12 col-sm-8 col-md-5 col-xxl-3 rounded-3`}>
      <div className={`d-flex justify-content-center`}>
          <div className={`${styles.img_container} d-flex justify-content-center`}>
            <img src={`../../../images/${product.img}`} className={styles.product_img}/>
          </div>
        </div>
        <div className={`d-flex justify-content-between`}>
          <div className={`${styles.infos}`}>
            <p className={styles.name}>{product.name}</p>
            <p className={styles.type}>{product.type}</p>
            <p className={styles.price}>R$ {product.price}</p>
          </div>
        <div>
          <CartButton product={product} pushProduct={pushProduct}/>
        </div>
      </div>
    </article>
  )
}