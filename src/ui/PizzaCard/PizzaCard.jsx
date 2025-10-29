import PizzaCardImageSkeleton from '../../components/Skeletons/PizzaCardImageSkeleton'
import { DOUGH_OPTIONS as doughOptions } from '../../constants/doughOptions'
import { DOUGH_SIZE_OPTIONS as doughSizeOptions } from '../../constants/doughSizeOptions'
import ButtonAddToCart from '../ButtonAddToCart/ButtonAddToCart'
import OptionsGroup from '../OptionsGroup/OptionsGroup'
import styles from './styles.module.css'

const PizzaCard = ({
  pizza,
  selectedDoughIndex,
  selectedDoughSizeIndex,
  setSelectedDoughIndex,
  setSelectedDoughSizeIndex,
  pizzaPrice,
  pizzaPriceParseNumber,
  imageLoaded,
  setImageLoaded,
}) => {
  return (
    <li className={styles.card}>
      <article>
        {!imageLoaded && <PizzaCardImageSkeleton />}

        <img
          className={styles.image}
          src={pizza.imageUrl}
          alt={`Pizza ${pizza.title}`}
          onLoad={() => setImageLoaded(true)}
          style={{ display: imageLoaded ? 'block' : 'none' }}
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
