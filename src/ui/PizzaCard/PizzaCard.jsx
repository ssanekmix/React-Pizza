import { useState } from 'react'
import { DOUGH_OPTIONS as doughOptions } from '../../constants/doughOptions'
import { DOUGH_SIZE_OPTIONS as doughSizeOptions } from '../../constants/doughSizeOptions'
import calculatePizzaPrice from '../../helpers/calculatePizzaPrice'
import ButtonAddToCart from '../ButtonAddToCart/ButtonAddToCart'
import OptionsGroup from '../OptionsGroup/OptionsGroup'
import styles from './styles.module.css'

const PizzaCard = ({ pizza }) => {
  const [selectedDoughIndex, setSelectedDoughIndex] = useState(0)
  const [selectedDoughSizeIndex, setSelectedDoughSizeIndex] = useState(0)

  const pizzaPrice = calculatePizzaPrice(pizza.price, selectedDoughSizeIndex)
  const pizzaPriceParseNumber = parseInt(pizzaPrice.replace(/\D/g, ''))

  return (
    <li className={styles.card}>
      <article>
        <img
          className={styles.image}
          src={pizza.imageUrl}
          alt={`Pizza ${pizza.id + 1}`}
        />
        <h3 className={styles.title}>{pizza.title}</h3>
        <div className={styles.optionsWrapper}>
          <OptionsGroup
            selectedOption={selectedDoughIndex}
            setSelectedOption={setSelectedDoughIndex}
            options={doughOptions}
          />
          <OptionsGroup
            selectedOption={selectedDoughSizeIndex}
            setSelectedOption={setSelectedDoughSizeIndex}
            options={doughSizeOptions}
          />
        </div>
        <div className={styles.priceActionContainer}>
          <div className={styles.price}>{pizzaPrice}</div>
          <ButtonAddToCart
            pizza={pizza}
            selectedDough={doughOptions[selectedDoughIndex]}
            selectedDoughSize={doughSizeOptions[selectedDoughSizeIndex]}
            pizzaPrice={pizzaPriceParseNumber}
          />
        </div>
      </article>
    </li>
  )
}
export default PizzaCard
