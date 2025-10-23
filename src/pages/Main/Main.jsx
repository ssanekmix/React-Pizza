import FiltersBar from '../../components/FiltersBar/FiltersBar'
import PizzaList from '../../ui/PizzaList/PizzaList'

const Main = ({ pizzaData }) => {
  return (
    <main>
      <FiltersBar />
      <PizzaList pizzaData={pizzaData} />
    </main>
  )
}
export default Main
