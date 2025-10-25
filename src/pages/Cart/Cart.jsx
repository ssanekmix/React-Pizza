import CartHeader from '../../components/CartHeader/CartHeader'
import CartPizzaList from './../../components/CartPizzaList/CartPizzaList'
import styles from './styles.module.css'

const Cart = () => {
  return (
    <main className={styles.cart}>
      <CartHeader />
      <CartPizzaList />
    </main>
  )
}
export default Cart
