import { useState } from 'react'
import sortIcon from '../../assets/icons/sort-icon.svg'
import { SORT_NAMES as sortNames } from '../../constants/sortNames'
import styles from './styles.module.css'

const Sort = ({
  selectedSortName,
  setSelectedSortName,
  sortOrder,
  setSortOrder,
}) => {
  const [isSortSelectorOpen, setIsSortSelectorOpen] = useState(false)

  const handleSelect = (sortName) => {
    setSelectedSortName(sortName)
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
          {selectedSortName}
        </span>
      </div>
      <ul
        className={`${styles.sortSelector} ${
          isSortSelectorOpen && styles.sortSelectorOpen
        }`}
      >
        {sortNames.map((name) => (
          <li
            className={`${styles.sortSelectorItem} ${
              selectedSortName === name && styles.active
            }`}
            key={name}
            onClick={() => handleSelect(name)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Sort
