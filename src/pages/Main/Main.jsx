import { useMemo } from 'react'
import FiltersBar from '../../components/FiltersBar/FiltersBar'
import { useFilters } from '../../hooks/useFilters'
import { usePizzaData } from '../../hooks/usePizzaData'
import PizzaList from '../../ui/PizzaList/PizzaList'

const Main = () => {
  const { selectedCategory, selectedSortName, sortOrder } = useFilters()
  const { data: pizzaData, isLoading } = usePizzaData()

  const filteredPizzas =
    selectedCategory === 0
      ? pizzaData
      : pizzaData.filter((pizza) => pizza.category.includes(selectedCategory))

  const sortedPizzas = useMemo(() => {
    return [...filteredPizzas].sort((a, b) => {
      let compare = 0

      if (selectedSortName === 'популярности') compare = a.rating - b.rating
      if (selectedSortName === 'по цене') compare = a.price - b.price
      if (selectedSortName === 'по алфавиту')
        compare = a.title.localeCompare(b.title)

      return sortOrder === 'asc' ? compare : -compare
    })
  }, [filteredPizzas, selectedSortName, sortOrder])

  return (
    <main>
      <FiltersBar />
      <PizzaList pizzaData={sortedPizzas} isLoading={isLoading} />
    </main>
  )
}
export default Main
