import Categories from '../Categories/Categories'
import Sort from '../Sort/Sort'
import styles from './styles.module.css'

const FiltersBar = () => {
  return (
    <div className={styles.filterBar}>
      <Categories />
      <Sort />
    </div>
  )
}
export default FiltersBar
