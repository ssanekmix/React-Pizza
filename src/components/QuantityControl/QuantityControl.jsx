import styles from './styles.module.css'

const QuantityControl = () => {
  return (
    <div className={styles.control}>
      <button className={styles.button}></button>
      <span className={styles.count}>2</span>
      <button className={styles.button}></button>
    </div>
  )
}
export default QuantityControl
