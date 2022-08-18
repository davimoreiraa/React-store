/* ------------ STYLES ------------ */
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

/* ------------ COMPONENTS ------------ */
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="../../images/cart.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
