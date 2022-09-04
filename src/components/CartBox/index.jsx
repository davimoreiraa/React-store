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

  return (
    <div className={`${styles.card_box} position-absolute end-0 col-4 d-flex justify-content-center`}>
      <div>
        {products.map((product) => (
          <MiniCard key={product.id} product={product}/>
        ))}
      </div>
    </div>
  )
}