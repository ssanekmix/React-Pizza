import PizzaCard from '../PizzaCard/PizzaCard'
import styles from './styles.module.css'

const PizzaList = ({ pizzaData }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Все пиццы</h2>
      <ul className={styles.list}>
        {pizzaData.map((pizza) => (
          <PizzaCard key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </div>
  )
}
export default PizzaList
