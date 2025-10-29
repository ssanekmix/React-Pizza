import styles from './styles.module.css'

const CartItemRemoveButton = ({ onRemoveBtnClick }) => {
  return (
    <button onClick={onRemoveBtnClick} className={styles.removeButton}></button>
  )
}
export default CartItemRemoveButton
