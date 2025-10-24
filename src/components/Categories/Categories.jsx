import CategoryButton from '../../ui/CategoryButton/CategoryButton'
import styles from './styles.module.css'

const categories = [
  'Все',
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
]

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
