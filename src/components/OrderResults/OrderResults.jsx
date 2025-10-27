import styles from './styles.module.css'

const OrderResults = () => {
  return (
    <div className={styles.orderResults}>
      <div className={styles.orderPizzaCount}>
        Всего пицц: <span className={styles.countSpan}>3 шт.</span>
      </div>
      <div className={styles.orderTotalPrice}>
        Сумма заказа: <span className={styles.totalPriceSpan}>900 ₽</span>
      </div>
    </div>
  )
}
export default OrderResults
