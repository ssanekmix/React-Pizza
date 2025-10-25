import styles from './styles.module.css'

const OptionsGroup = ({ selectedOption, setSelectedOption, options }) => {
  return (
    <div className={styles.optionGroup}>
      {options.map((option, index) => (
        <button
          key={option}
          onClick={() => setSelectedOption(index)}
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
export default OptionsGroup
