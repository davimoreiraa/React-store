/* ------------ STYLES ------------ */
import styles from './styles.module.css'

/* ------------ COMPONENTS ------------ */
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard';
import Head from 'next/head'

/* ------------ DATA ------------ */
import data from './products.json';

export default function Home() {
  return (
    <>
      <Head>
        <title>React Store</title>
      </Head>
      <div className={`${styles.body}`}>
        <Header/>
        <main>
          {data.map(product => (
            <ProductCard  />
          ))}
        <ProductCard  />
        </main>
      </div>
    </>    
  )
}
