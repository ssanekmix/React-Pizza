import { useState } from 'react'
import { CartContext } from './CartContext'

export const CartProvider = ({ children }) => {
  const [selectedPizzas, setSelectedPizzas] = useState([])

  const addPizza = (pizzaToAdd) => {
    setSelectedPizzas((prev) => prev.push(pizzaToAdd))
  }

  const removePizza = (pizzaToRemove) => {
    setSelectedPizzas((prev) => prev.filter((pizza) => pizza !== pizzaToRemove))
  }

  const clearCart = () => {
    setSelectedPizzas([])
  }

  return (
    <CartContext.Provider
      value={{ selectedPizzas, addPizza, removePizza, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
