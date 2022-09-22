/* ------------ STYLES ------------ */
import styles from './styles.module.css'

/* ------------ COMPONENTS ------------ */
import MiniCard from '../MiniCard'

/* ------------ RESOURCES ------------ */
import { useContext, useEffect, useState } from "react";

/* ------------ CONTEXT ------------ */
import Products from '../../Context/Products'

export default function CartBox({ showCart }) {
  const [products, setProducts] = useContext(Products);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    updatePrice()
	}, [products])

  function updatePrice() {
    let price = 0
    products.forEach(product => {
      price += product.price
      console.log(product.price)
    })
    setTotalPrice(price)
  }
  
  function removeProduct(id) {
    let newProductsArray = [...products]
    let searchProduct = newProductsArray.findIndex(product => {
      return product.id === id
    })
    newProductsArray.splice(searchProduct, 1)
    setProducts(newProductsArray)
 }

 function isCartEmpty() {
  if (products.length == 0) {
    return (
      <div className={`${styles.cart_message} rounded-3 d-flex justify-content-center`}>
        <p className={`${styles.margin_bt_0}`}>Você não possui itens no carrinho</p>
      </div>
    ) 
  }
 }

  return (
    <div className={`${styles.card_box} ${showCart ? '' : 'd-none'} position-fixed end-0 col-12 col-md-4 col-xl-3 d-flex justify-content-center`}>
      <div className={`${styles.container} col-12 rounded-2`}>
        {isCartEmpty()}
        {products.map((product) => (
          <MiniCard key={product.id} product={product} removeProduct={removeProduct}/>
        ))}
        <div className={`${styles.total_price_box} rounded-3 d-flex justify-content-center`}>
          Total: R$ {totalPrice.toFixed(2)}
        </div>
      </div>
    </div>
  )
}