import { useNavigate } from 'react-router-dom'
import styles from './styles.module.css'

const ButtonGoBack = ({ isInEmptyCart }) => {
  const navigate = useNavigate()

  const goToMain = () => {
    navigate('/')
  }

  return (
    <button
      className={`${styles.buttonGoBack} ${
        isInEmptyCart && styles.buttonBlack
      }`}
      onClick={goToMain}
    >
      {!isInEmptyCart && (
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
      )}
      Вернуться назад
    </button>
  )
}
export default ButtonGoBack
