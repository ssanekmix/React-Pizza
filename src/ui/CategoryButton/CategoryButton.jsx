import styles from './styles.module.css'

const CategoryButton = ({
  title,
  activeCategory,
  categoryIndex,
  setActiveCategory,
}) => {
  return (
    <li
      className={`${styles.listItem} ${
        categoryIndex === activeCategory && styles.active
      }`}
      onClick={() => setActiveCategory(categoryIndex)}
    >
      {title}
    </li>
  )
}
export default CategoryButton
