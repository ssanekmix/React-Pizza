import styles from './styles.module.css'

const Categories = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={`${styles.listItem} ${styles.active}`}>Все</li>
        <li className={styles.listItem}>Мясные</li>
        <li className={styles.listItem}>Вегетарианская</li>
        <li className={styles.listItem}>Гриль</li>
        <li className={styles.listItem}>Острые</li>
        <li className={styles.listItem}>Закрытые</li>
      </ul>
    </nav>
  )
}
export default Categories
