import CartPizzaItem from './../CartPizzaItem/CartPizzaItem'
import styles from './styles.module.css'

const CartPizzaList = () => {
  return (
    <ul className={styles.cartList}>
      <CartPizzaItem />
      <CartPizzaItem />
      <CartPizzaItem />
      <CartPizzaItem />
    </ul>
  )
}
export default CartPizzaList
