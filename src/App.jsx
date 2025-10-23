import { useEffect, useState } from 'react'
import { fetchData } from './api/fetchData'
import './App.css'
import Header from './components/Header/Header'
import Main from './pages/Main/Main'

function App() {
  const [pizzaData, setPizzaData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    const getPizzaData = async () => {
      setIsLoading(true)
      try {
        const data = await fetchData({ signal })
        setPizzaData(data)
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error)
      } finally {
        setIsLoading(false)
      }
    }

    getPizzaData()

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <>
      <Header />
      <Main pizzaData={pizzaData} isLoading={isLoading} />
    </>
  )
}

export default App
