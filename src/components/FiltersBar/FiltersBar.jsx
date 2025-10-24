import Categories from '../Categories/Categories'
import Sort from '../Sort/Sort'
import styles from './styles.module.css'

const FiltersBar = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className={styles.filterBar}>
      <Categories
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
      />
      <Sort />
    </div>
  )
}
export default FiltersBar
