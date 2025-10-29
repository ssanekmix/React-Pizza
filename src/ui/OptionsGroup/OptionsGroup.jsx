import { memo, useCallback } from 'react'
import styles from './styles.module.css'

const OptionsGroup = ({ selectedOption, setSelectedOption, options }) => {
  const handleSelect = useCallback(
    (event) => {
      const index = Number(event.currentTarget.dataset.index)
      setSelectedOption(index)
    },
    [setSelectedOption]
  )

  return (
    <div className={styles.optionGroup}>
      {options.map((option, index) => (
        <button
          key={option}
          data-index={index}
          onClick={handleSelect}
          className={`${styles.optionBtn} ${
            index === selectedOption && styles.activeOption
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
export default memo(OptionsGroup)
