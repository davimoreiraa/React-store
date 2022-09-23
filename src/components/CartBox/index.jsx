/* ------------ STYLES ------------ */
import styles from './styles.module.css'

/* ------------ COMPONENTS ------------ */
import MiniCard from '../MiniCard'

/* ------------ RESOURCES ------------ */
import { useContext, useEffect, useState } from "react";

/* ------------ CONTEXT ------------ */
import Cart from '../../Context/Cart'

export default function CartBox({ showCart }) {
  const [cart, setCart] = useContext(Cart);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    updatePrice()
	}, [cart])

  function updatePrice() {
    let price = 0
    cart.forEach(product => {
      price += product.price
      console.log(product.price)
    })
    setTotalPrice(price)
  }
  
  function removeProduct(id) {
    let newCartArray = [...cart]
    let searchCart = newCartArray.findIndex(product => {
      return product.id === id
    })
    newCartArray.splice(searchCart, 1)
    setCart(newCartArray)
 }

 function isCartEmpty() {
  if (cart.length == 0) {
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
        {cart.map((product) => (
          <MiniCard key={product.id} product={product} removeProduct={removeProduct}/>
        ))}
        <div className={`${styles.total_price_box} rounded-3 d-flex justify-content-center`}>
          Total: R$ {totalPrice.toFixed(2)}
        </div>
      </div>
    </div>
  )
}