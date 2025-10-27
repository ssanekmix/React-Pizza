export const findPizzaInCart = (cart, pizzaToCheck) => {
  return cart.findIndex(
    (p) =>
      p.title === pizzaToCheck.title &&
      p.dough === pizzaToCheck.dough &&
      p.doughSize === pizzaToCheck.doughSize
  )
}
