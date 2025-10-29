import './App.css'
import { CartProvider } from './context/CartContext/CartProvider'
import { FiltersBarProvider } from './context/FiltersBarContext/FiltersBarProvider'
import Pages from './routes/Pages'

function App() {
  return (
    <CartProvider>
      <FiltersBarProvider>
        <Pages />
      </FiltersBarProvider>
    </CartProvider>
  )
}

export default App
