import styles from './styles.module.css'

const CategoryButton = ({ title }) => {
  return <li className={`${styles.listItem} ${styles.active}`}>{title}</li>
}
export default CategoryButton
