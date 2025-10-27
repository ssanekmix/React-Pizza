import styles from './styles.module.css'

const QuantityControl = ({ count, onChange }) => {
  const handleDecrementClick = () => {
    onChange(Math.max(count - 1, 1))
  }

  const handleIncrementClick = () => {
    onChange(count + 1)
  }

  return (
    <div className={styles.control}>
      <button
        onClick={handleDecrementClick}
        className={`${styles.button} ${count === 1 && styles.buttonIsDisabled}`}
      ></button>
      <span className={styles.count}>{count}</span>
      <button onClick={handleIncrementClick} className={styles.button}></button>
    </div>
  )
}
export default QuantityControl
