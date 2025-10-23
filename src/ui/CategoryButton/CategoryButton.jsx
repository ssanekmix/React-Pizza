import styles from './styles.module.css'

const CategoryButton = ({ title, isActive }) => {
  return (
    <li className={`${styles.listItem} ${isActive && styles.active}`}>
      {title}
    </li>
  )
}
export default CategoryButton
