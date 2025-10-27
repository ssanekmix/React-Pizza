import './App.css'
import { CartProvider } from './context/CartContext/CartProvider'
import { FiltersBarProvider } from './context/FiltersBarContext/FiltersBarProvider'
import { usePizzaData } from './hooks/usePizzaData'
import Pages from './routes/Pages'

function App() {
  const { data: pizzaData, isLoading } = usePizzaData()

  return (
    <CartProvider pizzaData={pizzaData}>
      <FiltersBarProvider>
        <Pages pizzaData={pizzaData} isLoading={isLoading} />
      </FiltersBarProvider>
    </CartProvider>
  )
}

export default App
