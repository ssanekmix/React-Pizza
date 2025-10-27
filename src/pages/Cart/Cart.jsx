import CartFooterActions from '../../components/CartFooterActions/CartFooterActions'
import CartHeader from '../../components/CartHeader/CartHeader'
import OrderResults from '../../components/OrderResults/OrderResults'
import CartPizzaList from './../../components/CartPizzaList/CartPizzaList'
import styles from './styles.module.css'

const Cart = () => {
  return (
    <main className={styles.cart}>
      <CartHeader />
      <CartPizzaList />
      <OrderResults />
      <CartFooterActions />
    </main>
  )
}
export default Cart
