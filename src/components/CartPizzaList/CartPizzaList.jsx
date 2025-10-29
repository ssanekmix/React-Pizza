import CartPizzaItem from './../CartPizzaItem/CartPizzaItem'
import styles from './styles.module.css'

const CartPizzaList = ({ pizzaData }) => {
  return (
    <ul className={styles.cartList}>
      {pizzaData.map((pizza) => (
        <CartPizzaItem
          key={`${pizza.title}_${pizza.dough}_${[pizza.doughSize]}`}
          pizza={pizza}
        />
      ))}
    </ul>
  )
}
export default CartPizzaList
