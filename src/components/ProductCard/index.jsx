/* ------------ STYLES ------------ */
import styles from './styles.module.css'

/* ------------ COMPONENTS ------------ */
import CartButton from '../CartButton'

/* ------------ RESOURCES ------------ */
import React, { useContext } from "react";

/* ------------ CONTEXT ------------ */
import Products from '../../Context/Products'

export default function ProductCard({name, type, price, img, id}) {
  const [products, setProducts] = useContext(Products);

  function pushProduct(productID) {
    setProducts({...products, productID})
    console.log('a')
  }

  return (
    <article className={`${styles.card} col-12 col-sm-8 col-md-5 col-xxl-3 rounded-3`}>
        <div className={`d-flex justify-content-center`}>
          <div className={`${styles.img_container} d-flex justify-content-center`}>
            <img src={`../../../images/${img}`} className={styles.product_img}/>
          </div>
        </div>
        <div className={`d-flex justify-content-between`}>
          <div className={`${styles.infos}`}>
            <p className={styles.name}>{name}</p>
            <p className={styles.type}>{type}</p>
            <p className={styles.price}>{price}</p>
          </div>
        <div>
          <CartButton pushProduct={pushProduct} id={id}/>
        </div>
        </div>
    </article>
  )
}