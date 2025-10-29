import emptyCartImage from '../../assets/images/empty-cart-image.png'
import ButtonGoBack from '../ButtonGoBack/ButtonGoBack'
import styles from './styles.module.css'

const CartEmpty = () => {
  return (
    <div className={styles.CartEmpty}>
      <p className={styles.title}>Корзина пустая 😕</p>
      <p className={styles.descr}>
        Вероятней всего, вы не заказывали ещё пиццу. <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img
        className={styles.emptyCartImage}
        src={emptyCartImage}
        alt="empty cart"
      />
      <ButtonGoBack isInEmptyCart />
    </div>
  )
}
export default CartEmpty
