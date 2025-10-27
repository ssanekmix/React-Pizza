import { useEffect, useState } from 'react'
import OpenCartButton from '../OpenCartButton/OpenCartButton'
import styles from './styles.module.css'

const Header = ({ isOnMainPage }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
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
      {isOnMainPage && <OpenCartButton />}
    </header>
  )
}
export default Header
