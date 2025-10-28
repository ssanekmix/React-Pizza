import { useEffect, useState } from 'react'
import { useCartState } from '../../hooks/useCartState'
import CartItemRemoveButton from '../CartItemRemoveButton/CartItemRemoveButton'
import { calculateTotalPrice } from './../../helpers/calculateTotalPrice'
import QuantityControl from './../QuantityControl/QuantityControl'
import CartPizzaImageSkeleton from './../Skeletons/CartPizzaImageSkeleton'
import styles from './styles.module.css'

const CartPizzaItem = ({ pizza }) => {
  const [count, setCount] = useState(0)
  const [imageLoaded, setImageLoaded] = useState(false)

  const { removePizza, updatePizzaCount } = useCartState()

  useEffect(() => {
    setCount(pizza.count)
  }, [pizza.count])

  const handleCountChange = (newCount) => {
    setCount(newCount)
    updatePizzaCount(pizza, newCount)
  }

  return (
    <li className={styles.cartItem}>
      <div className={styles.info}>
        {!imageLoaded && <CartPizzaImageSkeleton />}
        <img
          className={styles.image}
          src={pizza.image}
          alt={`Pizza ${[pizza.title]}`}
          onLoad={() => setImageLoaded(true)}
          style={{ display: imageLoaded ? 'block' : 'none' }}
        />
        <div className={styles.text}>
          <h3 className={styles.title}>{pizza.title}</h3>
          <p className={styles.doughInfo}>
            {pizza.dough} тесто, {pizza.doughSize}
          </p>
        </div>
      </div>
      <div className={styles.actions}>
        <QuantityControl count={count} onChange={handleCountChange} />
        <span className={styles.title}>
          {calculateTotalPrice(pizza.price, count)} ₽
        </span>
        <CartItemRemoveButton onRemoveBtnClick={() => removePizza(pizza)} />
      </div>
    </li>
  )
}
export default CartPizzaItem
