/* ------------ STYLES ------------ */
import styles from './styles.module.css'

/* ------------ COMPONENTS ------------ */
import Image from 'next/Image'

/* ------------ IMAGES AND ICONS ------------ */
import Logo from '../../../public/images/store_icon.png'

export default function Footer() {
  return (
    <footer className={`${styles.footer} d-lg-flex justify-content-between`}>
      <div className={`d-flex align-items-center`}>
        <div className={`${styles.logo_container} `}>
          <Image src={Logo} layout='responsive' />
        </div>
        <p className={`${styles.liscense}`}>@React Store, Inc</p>
      </div>
      <div className={`d-flex align-items-center justify-content-center`}>
        <nav className={`${styles.nav} d-flex col-7 col-lg-auto align-items-center justify-content-between`}>
          <ul className={`d-flex align-items-center col-12 justify-content-between`}>
            <li className={`${styles.nav_item}`}>
              <a href="">Termos</a>
            </li>
            <li className={`${styles.nav_item}`}>
              <a href="">Licença</a>
            </li>
            <li className={`${styles.nav_item}`}>
              <a href="">API</a>
            </li>
            <li className={`${styles.nav_item}`}>
              <a href="">Segurança</a>
            </li>
            <li className={`${styles.nav_item}`}>
              <a href="">Contato</a>
            </li>
            <li className={`${styles.nav_item}`}>
              <a href="">Sobre</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}