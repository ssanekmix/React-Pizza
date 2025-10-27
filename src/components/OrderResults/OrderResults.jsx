import { useCartState } from '../../hooks/useCartState'
import styles from './styles.module.css'

const OrderResults = () => {
  const { totalPizzaCount, totalOrderPrice } = useCartState()

  return (
    <div className={styles.orderResults}>
      <div className={styles.orderPizzaCount}>
        Всего пицц:{' '}
        <span className={styles.countSpan}>{totalPizzaCount} шт.</span>
      </div>
      <div className={styles.orderTotalPrice}>
        Сумма заказа:{' '}
        <span className={styles.totalPriceSpan}>{totalOrderPrice} ₽</span>
      </div>
    </div>
  )
}
export default OrderResults
