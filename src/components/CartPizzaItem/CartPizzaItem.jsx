import CartItemRemoveButton from '../CartItemRemoveButton/CartItemRemoveButton'
import QuantityControl from './../QuantityControl/QuantityControl'
import styles from './styles.module.css'

const CartPizzaItem = () => {
  return (
    // {title, imageUrl, dough, doughSize, count, totalPrice}
    // selectedPizzas.map(() => (
    //   <li key={title}>
    //     <img src={imageUrl} alt={`Pizza ${title}`} />
    //     <div className={styles.info}>
    //       <h3></h3>
    //     </div>
    //   </li>
    // ))
    <li className={styles.cartItem}>
      <div className={styles.info}>
        <img
          className={styles.image}
          src="https://media.dodostatic.net/image/r:584x584/0198bf57bc517218ab93c762f4b0193e.avif"
          alt=""
        />
        <div className={styles.text}>
          <h3 className={styles.title}>Сырный цыпленок</h3>
          <p className={styles.doughInfo}>тонкое тесто, 26см</p>
        </div>
      </div>
      <div className={styles.actions}>
        <QuantityControl />
        <span className={styles.title}>770 ₽</span>
        <CartItemRemoveButton />
      </div>
    </li>
  )
}
export default CartPizzaItem
