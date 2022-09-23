/* ------------ STYLES ------------ */
import styles from './styles.module.css'

/* ------------ COMPONENTS ------------ */
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductCard from '../../components/ProductCard';
import Head from 'next/head'

/* ------------ DATA ------------ */
import data from '../../products.json';

/* ------------ RESOURCES ------------ */
import { useContext } from "react";

/* ------------ CONTEXT ------------ */
import Cart from '../../Context/Cart'

export default function Home() {
  const [cart, setCart] = useContext(Cart);
  
  function pushProduct(product) {
    if(cart.includes(product) == true) return
    setCart([...cart, product])
  }

  return (
    <div>
      <Head>
        <title>React Store</title>
      </Head>
      <div className={`${styles.body}`}>
        <Header/>
        <div className={`${styles.options} `}>
          <div className={`${styles.input_container} form-check form-check-inline`}>
            <input type="checkbox" id="fitment" className={`form-check-input`} />
            <label htmlFor="fitment" className={`form-check-label`}>Móveis</label>
          </div>
          <div className={`${styles.input_container} form-check form-check-inline`}>
            <input type="checkbox" id="eletronics" className={`form-check-input`} />
            <label htmlFor="eletronics" className={`form-check-label`}>Eletrônicos</label>
          </div>
        </div>
        <main className={`${styles.content} d-flex justify-content-center`}>
          <div className={`${styles.products_container} d-flex justify-content-center col-11 gap-3 row row-cols-md-2 row-cols-lg-3`}>
            {data.map(product => (
              <ProductCard 
              key={product.id} 
              product={product}
              pushProduct={pushProduct}
              />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </div>    
  )
}
