import CartPizzaItem from './../CartPizzaItem/CartPizzaItem'
import styles from './styles.module.css'

const CartPizzaList = ({ pizzaData }) => {
  return (
    <ul className={styles.cartList}>
      {pizzaData.map((pizza, index) => (
        <CartPizzaItem key={index} pizza={pizza} />
      ))}
    </ul>
  )
}
export default CartPizzaList
