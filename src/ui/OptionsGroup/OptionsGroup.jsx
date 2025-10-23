import { useState } from 'react'
import styles from './styles.module.css'

const OptionsGroup = ({ options }) => {
  const [activeOptionBtn, setActiveOptionBtn] = useState(0)

  return (
    <div className={styles.optionGroup}>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => setActiveOptionBtn(index)}
          className={`${styles.optionBtn} ${
            index === activeOptionBtn && styles.activeOption
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
export default OptionsGroup
