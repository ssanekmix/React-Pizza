import './App.css'
import Header from './components/Header/Header'
import { CartProvider } from './context/CartContext/CartProvider'
import { FiltersBarProvider } from './context/FiltersBarContext/FiltersBarProvider'
import { usePizzaData } from './hooks/usePizzaData'
import Main from './pages/Main/Main'

function App() {
  const { data: pizzaData, isLoading } = usePizzaData()

  return (
    <CartProvider>
      <Header />
      <FiltersBarProvider>
        <Main pizzaData={pizzaData} isLoading={isLoading} />
      </FiltersBarProvider>
    </CartProvider>
  )
}

export default App
