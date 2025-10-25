import FiltersBar from '../../components/FiltersBar/FiltersBar'
import { useFilters } from '../../hooks/useFilters'
import PizzaList from '../../ui/PizzaList/PizzaList'

const Main = ({ pizzaData }) => {
  const { selectedCategory, selectedSortName, sortOrder } = useFilters()

  const filteredPizzas =
    selectedCategory === 0
      ? pizzaData
      : pizzaData.filter((pizza) => pizza.category.includes(selectedCategory))

  const sortedPizzas = [...filteredPizzas].sort((a, b) => {
    let compare = 0

    if (selectedSortName === 'популярности') compare = a.rating - b.rating
    if (selectedSortName === 'по цене') compare = a.price - b.price
    if (selectedSortName === 'по алфавиту')
      compare = a.title.localeCompare(b.title)

    return sortOrder === 'asc' ? compare : -compare
  })

  return (
    <main>
      <FiltersBar />
      <PizzaList pizzaData={sortedPizzas} />
    </main>
  )
}
export default Main
