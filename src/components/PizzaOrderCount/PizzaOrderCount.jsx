import styles from './styles.module.css'

const PizzaOrderCount = ({ count }) => {
  return <div className={styles.orderCount}>{count}</div>
}
export default PizzaOrderCount
