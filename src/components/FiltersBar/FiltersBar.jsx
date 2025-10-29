import { useFilters } from '../../hooks/useFilters'
import Categories from '../Categories/Categories'
import Sort from '../Sort/Sort'
import styles from './styles.module.css'

const FiltersBar = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    selectedSortName,
    setSelectedSortName,
    sortOrder,
    setSortOrder,
  } = useFilters()

  return (
    <div className={styles.filterBar}>
      <Categories
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <Sort
        selectedSortName={selectedSortName}
        setSelectedSortName={setSelectedSortName}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
    </div>
  )
}
export default FiltersBar
