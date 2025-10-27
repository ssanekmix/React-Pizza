import { useState } from 'react'
import { calculateTotalPrice } from '../../helpers/calculateTotalPrice'
import { findPizzaInCart } from './../../helpers/findPizzaInCart'
import { CartContext } from './CartContext'

export const CartProvider = ({ children, pizzaData }) => {
  const [selectedPizzas, setSelectedPizzas] = useState([])

  const totalPizzaCount = selectedPizzas.reduce(
    (acc, pizza) => acc + pizza.count,
    0
  )
  const totalOrderPrice = selectedPizzas.reduce(
    (acc, pizza) => acc + calculateTotalPrice(pizza.price, pizza.count),
    0
  )

  const addPizza = (
    pizzaToAddId,
    selectedDough,
    selectedDoughSize,
    pizzaPrice
  ) => {
    const pizzaToAdd = pizzaData.find((pizza) => pizza.id === pizzaToAddId)
    setSelectedPizzas((prev) => {
      const existingPizzaIndex = findPizzaInCart(prev, {
        title: pizzaToAdd.title,
        dough: selectedDough,
        doughSize: selectedDoughSize,
      })

      if (existingPizzaIndex !== -1) {
        const updated = [...prev]

        updated[existingPizzaIndex] = {
          ...updated[existingPizzaIndex],
          count: updated[existingPizzaIndex].count + 1,
        }

        return updated
      }

      return [
        ...prev,
        {
          title: pizzaToAdd.title,
          image: pizzaToAdd.imageUrl,
          dough: selectedDough,
          doughSize: selectedDoughSize,
          count: 1,
          price: pizzaPrice,
        },
      ]
    })
  }

  const updatePizzaCount = (pizzaToUpdate, newCount) => {
    setSelectedPizzas((prev) => {
      const index = findPizzaInCart(prev, pizzaToUpdate)
      if (index === -1) return prev
      const updated = [...prev]
      updated[index] = { ...updated[index], count: newCount }
      return updated
    })
  }

  const removePizza = (pizzaToRemove) => {
    setSelectedPizzas((prev) => {
      const index = findPizzaInCart(prev, pizzaToRemove)
      if (index === -1) return prev
      const updated = [...prev]
      updated.splice(index, 1)
      return updated
    })
  }

  const clearCart = () => {
    setSelectedPizzas([])
  }

  return (
    <CartContext.Provider
      value={{
        selectedPizzas,
        addPizza,
        removePizza,
        clearCart,
        updatePizzaCount,
        totalPizzaCount,
        totalOrderPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
