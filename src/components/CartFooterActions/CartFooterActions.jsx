import ButtonGoBack from '../ButtonGoBack/ButtonGoBack'
import styles from './styles.module.css'

const CartFooterActions = () => {
  return (
    <div className={styles.footerActions}>
      <ButtonGoBack />
      <button className={styles.buttonBuyNow}>Оплатить сейчас</button>
    </div>
  )
}
export default CartFooterActions
