import { useMemo, useState } from 'react'
import calculatePizzaPrice from '../../helpers/calculatePizzaPrice'
import PizzaCard from '../../ui/PizzaCard/PizzaCard'

const PizzaCardContainer = ({ pizza }) => {
  const [selectedDoughIndex, setSelectedDoughIndex] = useState(0)
  const [selectedDoughSizeIndex, setSelectedDoughSizeIndex] = useState(0)
  const [imageLoaded, setImageLoaded] = useState(false)

  const pizzaPrice = useMemo(
    () => calculatePizzaPrice(pizza.price, selectedDoughSizeIndex),
    [pizza.price, selectedDoughSizeIndex]
  )
  const pizzaPriceParseNumber = parseInt(pizzaPrice.replace(/\D/g, ''))

  return (
    <PizzaCard
      pizza={pizza}
      selectedDoughIndex={selectedDoughIndex}
      selectedDoughSizeIndex={selectedDoughSizeIndex}
      setSelectedDoughIndex={setSelectedDoughIndex}
      setSelectedDoughSizeIndex={setSelectedDoughSizeIndex}
      imageLoaded={imageLoaded}
      setImageLoaded={setImageLoaded}
      pizzaPrice={pizzaPrice}
      pizzaPriceParseNumber={pizzaPriceParseNumber}
    />
  )
}
export default PizzaCardContainer
