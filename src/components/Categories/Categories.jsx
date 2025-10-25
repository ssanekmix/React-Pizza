import { CATEGORIES as categories } from '../../constants/categories'
import CategoryButton from '../../ui/CategoryButton/CategoryButton'
import styles from './styles.module.css'

const Categories = ({ selectedCategory, onCategoryChange }) => {
  return (
    <nav>
      <ul className={styles.list}>
        {categories.map((category, index) => (
          <CategoryButton
            key={index}
            title={category}
            categoryIndex={index}
            selectedCategory={selectedCategory}
            onCategoryChange={onCategoryChange}
          />
        ))}
      </ul>
    </nav>
  )
}
export default Categories
