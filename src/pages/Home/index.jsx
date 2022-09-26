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
import { useContext, useState, useEffect } from "react";

/* ------------ CONTEXT ------------ */
import Cart from '../../Context/Cart'
import Filter from '../../Context/Filter'

export default function Home() {
  const [cart, setCart] = useContext(Cart);
  const [filter, setFilter] = useContext(Filter);
  const [productsToBeReder, setProductsToBeReder] = useState([]);
  
  useEffect(() => {
		renderProductsCard()
	}, [filter])

  function pushProduct(product) {
    if(cart.includes(product) == true) return
    setCart([...cart, product])
  }

  function handleToogleCategorie(categorie) {
    if(filter.includes(categorie) == true) {
      let newFilterArray = [...filter]
      let searchCategorie = newFilterArray.findIndex(categorie => {
        return categorie == categorie 
      })
      newFilterArray.splice(searchCategorie, 1)
      setFilter(newFilterArray)
    }
    else setFilter([...filter, categorie])
  }

  function renderProductsCard() {
    const newArray = []
    data.forEach(function (element) {
      if(filter.includes(element.type)) {
        newArray.push(element)
        setProductsToBeReder(newArray)
      }
    })
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
            <input 
             type="checkbox" 
             id="mobilia"
             className={`form-check-input`} 
             onChange={() => handleToogleCategorie('Mobília')}/>
            <label htmlFor="mobilia" className={`form-check-label`}>Móveis</label>
          </div>
          <div className={`${styles.input_container} form-check form-check-inline`}>
            <input
             type="checkbox"
             id="eletronics"
             className={`form-check-input`} 
             onChange={() => handleToogleCategorie('Eletrônico')}/>
            <label htmlFor="eletronics" className={`form-check-label`}>Eletrônicos</label>
          </div>
        </div>
        <main className={`${styles.content} d-flex justify-content-center`}>
          <div className={`${styles.products_container} d-flex justify-content-center col-11 gap-3 row row-cols-md-2 row-cols-lg-3`}>
            {productsToBeReder.map(product => (
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
