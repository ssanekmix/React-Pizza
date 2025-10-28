import PizzaCard from '../PizzaCard/PizzaCard'
import PizzaCardSkeleton from './../../components/Skeletons/PizzaCardSkeleton'
import styles from './styles.module.css'

const PizzaList = ({ pizzaData, isLoading }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Все пиццы</h2>
      <ul className={styles.list}>
        {isLoading &&
          [...Array(8)].map((_, i) => <PizzaCardSkeleton key={i} />)}
        {pizzaData.map((pizza) => (
          <PizzaCard key={pizza.id} pizza={pizza} isLoading={isLoading} />
        ))}
      </ul>
    </div>
  )
}
export default PizzaList
