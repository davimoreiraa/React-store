/* ------------ STYLES ------------ */
import styles from './styles.module.css'

import Header from '../../components/Header'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>React Store</title>
      </Head>
      <div className={`${styles.body}`}>
        <Header/>
        <main>

        </main>
      </div>
    </>    

  )
}
