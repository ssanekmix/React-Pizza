import { useState } from 'react'
import { SORT_NAMES } from '../../constants/sortNames'
import { FiltersBarContext } from './FiltersBarContext'

export const FiltersBarProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [selectedSortName, setSelectedSortName] = useState(SORT_NAMES[0])
  const [sortOrder, setSortOrder] = useState('asc')

  return (
    <FiltersBarContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        selectedSortName,
        setSelectedSortName,
        sortOrder,
        setSortOrder,
      }}
    >
      {children}
    </FiltersBarContext.Provider>
  )
}
