/* ------------ STYLES ------------ */
import styles from './styles.module.css'

/* ------------ COMPONENTS ------------ */
import MiniCard from '../MiniCard'

/* ------------ RESOURCES ------------ */
import { useContext } from "react";

/* ------------ CONTEXT ------------ */
import Products from '../../Context/Products'

export default function CartBox() {
  const [products, setProducts] = useContext(Products);
  
  function removeProduct(id) {
    let newProductsArray = [...products]
    for(var i = 0; i < products.length; i++) { 
      if(products[i].id === id) { 
        newProductsArray.splice(i, 1); 
      }
    }
   setProducts(newProductsArray)
 }

  return (
    <div className={`${styles.card_box} position-absolute end-0 col-3 d-flex justify-content-center`}>
      <div className={`col-12`}>
        {products.map((product) => (
          <MiniCard key={product.id} product={product} removeProduct={removeProduct}/>
        ))}
      </div>
    </div>
  )
}