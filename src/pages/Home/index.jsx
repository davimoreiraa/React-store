/* ------------ STYLES ------------ */
import styles from './styles.module.css'

/* ------------ COMPONENTS ------------ */
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard';
import Head from 'next/head'

/* ------------ DATA ------------ */
import data from '../../products.json';

/* ------------ RESOURCES ------------ */
import { useContext } from "react";

/* ------------ CONTEXT ------------ */
import Products from '../../Context/Products'

export default function Home() {
  const [products, setProducts] = useContext(Products);
  
  function pushProduct(productID) {
    if(products.includes(productID) == true) return
    setProducts([...products, productID])
  }

  return (
    <div>
      <Head>
        <title>React Store</title>
      </Head>
      <div className={`${styles.body}`}>
        <Header productsList={data} productsInCart={products}/>
        <main className={`${styles.content} d-flex justify-content-center`}>
          <div className={`${styles.products_container} d-flex justify-content-center col-11 gap-3 row row-cols-md-2 row-cols-lg-3`}>
            {data.map(product => (
              <ProductCard 
              key={product.id} 
              id={product.id} 
              name={product.name} 
              price={product.price} 
              type={product.type}
              img={product.img}
              pushProduct={pushProduct}
              />
            ))}
          </div>
        </main>
      </div>
    </div>    
  )
}
