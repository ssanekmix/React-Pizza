const calculatePizzaPrice = (pizzaStartPrice, selectedDoughSizeIndex) => {
  const doughSizeIncrease =
    selectedDoughSizeIndex === 1 ? 280 : selectedDoughSizeIndex === 2 ? 460 : 0

  return selectedDoughSizeIndex === 0
    ? `от ${pizzaStartPrice + doughSizeIncrease} ₽`
    : `за ${pizzaStartPrice + doughSizeIncrease} ₽`
}

export default calculatePizzaPrice
