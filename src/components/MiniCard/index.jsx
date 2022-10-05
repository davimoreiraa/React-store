/* ------------ STYLES ------------ */
import styles from './styles.module.css'

/* ------------ COMPONENTS ------------ */
import Image from 'next/Image'

/* ------------ ICONS ------------ */
import { BsFillTrashFill } from 'react-icons/bs';

export default function MiniCard({ product, removeProduct }) {

  return (
    <div className={`${styles.mini_card} d-flex rounded-3 align-items-center justify-content-between`}>
      <div className={`${styles.img_container} d-flex justify-content-center `}>
        <Image src={`/images/${product.img}`} width={70} height={70}/>
      </div>
      <div className={`${styles.product_infos} `}>
        <h1 className={`${styles.product_name} `}>{product.name}</h1>
        <p className={`${styles.price}`}>R$ {product.price.toFixed(2)}</p>
      </div>
      <button className={`btn`} onClick={() => removeProduct(product.id)}>
        <i className={`${styles.trash_icon} align-self-end`}><BsFillTrashFill /></i>
      </button>
    </div>
  )
}