/* ------------ STYLES ------------ */
import styles from './styles.module.css'

/* ------------ COMPONENTS ------------ */
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard';
import Head from 'next/head'

/* ------------ DATA ------------ */
import data from '../../products.json';

export default function Home() {
  return (
    <div>
      <Head>
        <title>React Store</title>
      </Head>
      <div className={`${styles.body}`}>
        <Header/>
        <main className={`${styles.content} d-flex justify-content-center`}>
          <div className={`${styles.products_container} d-flex justify-content-center col-11 gap-3 row row-cols-md-2 row-cols-lg-3`}>
            {data.map(product => (
              <ProductCard 
              key={product.id} 
              name={product.name} 
              price={product.price} 
              type={product.type}
              img={product.img}
              />
            ))}
          </div>
        </main>
      </div>
    </div>    
  )
}
