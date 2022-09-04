/* ------------ STYLES ------------ */
import styles from './styles.module.css'

/* ------------ ICONS ------------ */
import { BsFillTrashFill } from 'react-icons/bs';

export default function MiniCard({ product }) {
  return (
    <div className={`${styles.mini_card} d-flex rounded-3 border align-items-center justify-content-between`}>
      <div className={`${styles.img_container} d-flex justify-content-center `}>
        <img src={`../../../images/${product.img}`} className={styles.product_img} width={70} height={70}/>
      </div>
      <div className={`${styles.product_infos} `}>
        <h1 className={`${styles.product_name} `}>{product.name}</h1>
        <p className={`${styles.price}`}>{product.price}</p>
      </div>
      <i className={`${styles.trash_icon} align-self-end`}><BsFillTrashFill /></i>
    </div>
  )
}