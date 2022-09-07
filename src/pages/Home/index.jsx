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
  
  function pushProduct(product) {
    if(products.includes(product) == true) return
    setProducts([...products, product])
  }

  function removeProduct(id) {
    let newProductsArray = products
    for(var i = 0; i < products.length; i++) { 
      if(products[i].id === id) { 
        newProductsArray.splice(i, 1); 
      }
    }
    setProducts(newProductsArray)
    console.log(products)
  }

  return (
    <div>
      <Head>
        <title>React Store</title>
      </Head>
      <div className={`${styles.body}`}>
        <Header removeProduct={removeProduct}/>
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
      </div>
    </div>    
  )
}
