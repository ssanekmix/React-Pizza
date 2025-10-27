import styles from './styles.module.css'

const CategoryButton = ({
  title,
  selectedCategory,
  categoryIndex,
  onCategoryChange,
}) => {
  return (
    <li onClick={() => onCategoryChange(categoryIndex)}>
      <button
        className={`${styles.listItem} ${
          categoryIndex === selectedCategory && styles.active
        }`}
      >
        {title}
      </button>
    </li>
  )
}
export default CategoryButton
