import { useState } from 'react'
import FiltersBar from '../../components/FiltersBar/FiltersBar'
import PizzaList from '../../ui/PizzaList/PizzaList'

const Main = ({ pizzaData }) => {
  const [selectedCategory, setSelectedCategory] = useState(0)

  const filteredPizzas =
    selectedCategory === 0
      ? pizzaData
      : pizzaData.filter((pizza) =>
          pizza.category.some((category) => category === selectedCategory)
        )

  return (
    <main>
      <FiltersBar
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <PizzaList pizzaData={filteredPizzas} />
    </main>
  )
}
export default Main
