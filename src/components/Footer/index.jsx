/* ------------ STYLES ------------ */
import styles from './styles.module.css'

/* ------------ COMPONENTS ------------ */
import Image from 'next/Image'

/* ------------ IMAGES AND ICONS ------------ */
import Logo from '../../../public/images/store_icon.png'

export default function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`d-flex align-items-center`}>
        <div className={`${styles.logo_container} `}>
          <Image src={Logo} layout='responsive' />
        </div>
        <p className={`${styles.liscense}`}>@React Store</p>
      </div>
    </footer>
  )
}