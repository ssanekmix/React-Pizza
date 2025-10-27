import styles from './styles.module.css'

const CartFooterActions = () => {
  return (
    <div className={styles.footerActions}>
      <button className={styles.buttonGoBack}>
        <svg
          className={styles.icon}
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.75 12.75L0.75 6.68015L6.61175 0.75"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Вернуться назад
      </button>
      <button className={styles.buttonBuyNow}>Оплатить сейчас</button>
    </div>
  )
}
export default CartFooterActions
