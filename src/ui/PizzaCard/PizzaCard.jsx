import calculatePizzaPrice from '../../helpers/calculatePizzaPrice'
import ButtonAddToCart from '../ButtonAddToCart/ButtonAddToCart'
import OptionsGroup from '../OptionsGroup/OptionsGroup'
import styles from './styles.module.css'

const doughOptions = ['тонкое', 'традиционное']
const doughSizeOptions = ['26 см.', '30 см.', '40 см.']

const PizzaCard = ({ pizza }) => {
  return (
    <article className={styles.card}>
      <li>
        <img
          className={styles.image}
          src={pizza.imageUrl}
          alt={`Pizza ${pizza.id + 1}`}
        />
        <h3 className={styles.title}>{pizza.title}</h3>
        <div className={styles.optionsWrapper}>
          <OptionsGroup options={doughOptions} />
          <OptionsGroup options={doughSizeOptions} />
        </div>
        <div className={styles.priceActionContainer}>
          <div className={styles.price}>
            от {calculatePizzaPrice(pizza.price)} ₽
          </div>
          <ButtonAddToCart />
        </div>
      </li>
    </article>
  )
}
export default PizzaCard
