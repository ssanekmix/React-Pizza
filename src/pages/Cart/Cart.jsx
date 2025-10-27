import CartFooterActions from '../../components/CartFooterActions/CartFooterActions'
import CartHeader from '../../components/CartHeader/CartHeader'
import OrderResults from '../../components/OrderResults/OrderResults'
import { useCartState } from '../../hooks/useCartState'
import CartPizzaList from './../../components/CartPizzaList/CartPizzaList'
import styles from './styles.module.css'

const Cart = () => {
  const { selectedPizzas } = useCartState()

  return (
    <main className={styles.cart}>
      <CartHeader />
      <CartPizzaList pizzaData={selectedPizzas} />
      <OrderResults />
      <CartFooterActions />
    </main>
  )
}
export default Cart
