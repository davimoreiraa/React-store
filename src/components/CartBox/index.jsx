/* ------------ STYLES ------------ */
import styles from './styles.module.css'

/* ------------ COMPONENTS ------------ */
import MiniCard from '../MiniCard'

/* ------------ RESOURCES ------------ */
import { useContext } from "react";

/* ------------ CONTEXT ------------ */
import Products from '../../Context/Products'

export default function CartBox({ showCart }) {
  const [products, setProducts] = useContext(Products);
  
  function removeProduct(id) {
    let newProductsArray = [...products]
    let searchProduct = newProductsArray.findIndex(product => {
      return product.id === id
    })
    newProductsArray.splice(searchProduct, 1)
    setProducts(newProductsArray)
 }

  return (
    <div className={`${styles.card_box} ${showCart ? '' : 'd-none'} position-fixed end-0 col-12 col-md-4 col-xl-3 d-flex justify-content-center`}>
      <div className={`col-12`}>
        {products.map((product) => (
          <MiniCard key={product.id} product={product} removeProduct={removeProduct}/>
        ))}
        <div className={`${styles.total_price_box} rounded-3 d-flex justify-content-center`}>
          Total: R$ 99999999
        </div>
      </div>
    </div>
  )
}