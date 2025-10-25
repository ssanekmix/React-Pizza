import styles from './styles.module.css'

const CategoryButton = ({
  title,
  selectedCategory,
  categoryIndex,
  onCategoryChange,
}) => {
  return (
    <li
      className={`${styles.listItem} ${
        categoryIndex === selectedCategory && styles.active
      }`}
      onClick={() => onCategoryChange(categoryIndex)}
    >
      {title}
    </li>
  )
}
export default CategoryButton
