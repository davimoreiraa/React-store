/* ------------ STYLES ------------ */
import styles from './styles.module.css'

/* ------------ COMPONENTS ------------ */
import Image from 'next/Image'
import Logo from '../../../public/images/store_icon.png'


export default function Header() {
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.logo_container}`}>
        <Image src={Logo} layout='responsive' />
      </div>
    </header>
  )
}