import './App.css'
import Header from './components/Header/Header'
import { CartProvider } from './context/CartContext/CartProvider'
import { FiltersBarProvider } from './context/FiltersBarContext/FiltersBarProvider'
import Cart from './pages/Cart/Cart'

function App() {
  // const { data: pizzaData, isLoading } = usePizzaData()

  return (
    <CartProvider>
      <Header isOnMainPage={false} />
      <FiltersBarProvider>
        <Cart></Cart>
      </FiltersBarProvider>
    </CartProvider>
  )
}

export default App
