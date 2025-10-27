import PizzaOrderCount from '../../components/PizzaOrderCount/PizzaOrderCount'
import { findPizzaInCart } from '../../helpers/findPizzaInCart'
import { useCartState } from '../../hooks/useCartState'
import styles from './styles.module.css'

const ButtonAddToCart = ({
  pizza,
  selectedDough,
  selectedDoughSize,
  pizzaPrice,
}) => {
  const { selectedPizzas, addPizza } = useCartState()

  const pizzaIndex = findPizzaInCart(selectedPizzas, {
    title: pizza.title,
    dough: selectedDough,
    doughSize: selectedDoughSize,
  })
  const currentCount = pizzaIndex !== -1 ? selectedPizzas[pizzaIndex].count : 0

  const onBtnAddToCartClick = () => {
    addPizza(pizza.id, selectedDough, selectedDoughSize, pizzaPrice)
  }

  return (
    <button className={styles.button} onClick={onBtnAddToCartClick}>
      <svg
        className={styles.icon}
        width="12"
        height="12"
        viewBox="0 0 12 12"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" />
      </svg>
      Добавить
      {currentCount > 0 && <PizzaOrderCount count={currentCount} />}
    </button>
  )
}
export default ButtonAddToCart
