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
          <div className={styles.price}>
            {calculatePizzaPrice(pizza.price, selectedDoughSizeIndex)}
          </div>
          <ButtonAddToCart />
        </div>
      </article>
    </li>
  )
}
export default PizzaCard
