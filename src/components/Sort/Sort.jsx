import { useState } from 'react'
import sortIcon from '../../assets/icons/sort-icon.svg'
import styles from './styles.module.css'

const sortNames = ['популярности', 'по цене', 'по алфавиту']

const Sort = () => {
  const [isSortSelectorOpen, setIsSortSelectorOpen] = useState(false)
  const [selectedSort, setSelectedSort] = useState(0)
  const [sortOrder, setSortOrder] = useState('asc')

  const handleSelect = (sortIndex) => {
    setSelectedSort(sortIndex)
    setIsSortSelectorOpen(false)
  }

  const handleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
  }

  return (
    <div
      className={styles.sort}
      onMouseLeave={() => setIsSortSelectorOpen(false)}
    >
      <img
        className={`${styles.sortIcon} ${
          sortOrder === 'desc' && styles.sortIconDesc
        }`}
        onClick={handleSortOrder}
        src={sortIcon}
        alt={`Сортировка по ${
          sortOrder === 'asc' ? 'возрастанию' : 'убыванию'
        }`}
      />
      <div className={styles.text}>
        <span className={styles.sortTitle} onClick={handleSortOrder}>
          Сортировка по:{' '}
        </span>
        <span
          className={styles.sortName}
          onMouseEnter={() => setIsSortSelectorOpen(true)}
        >
          {sortNames[selectedSort]}
        </span>
      </div>
      <ul
        className={`${styles.sortSelector} ${
          isSortSelectorOpen && styles.sortSelectorOpen
        }`}
      >
        {sortNames.map((name, index) => (
          <li
            className={`${styles.sortSelectorItem} ${
              selectedSort === index && styles.active
            }`}
            key={name}
            onClick={() => handleSelect(index)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Sort
