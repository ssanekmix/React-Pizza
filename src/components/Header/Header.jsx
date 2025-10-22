import CartButton from '../CartButton/CartButton'
import styles from './styles.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.info}>
        <a href="/">
          <img className={styles.logo} src="/logo.svg" alt="" />
        </a>
        <div className={styles.text}>
          <a href="/">
            <h1 className={styles.title}>REACT PIZZA</h1>
          </a>
          <div className={styles.descr}>самая вкусная пицца во вселенной</div>
        </div>
      </div>
      <CartButton />
    </header>
  )
}
export default Header
