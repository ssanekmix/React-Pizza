import { useCallback, useEffect, useState } from 'react'
import { fetchData } from '../api/fetchData'

export const usePizzaData = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getPizzaData = useCallback(() => {
    const controller = new AbortController()
    const signal = controller.signal

    const fetchDataAsync = async () => {
      setIsLoading(true)
      try {
        const result = await fetchData({ signal })
        setData(result)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDataAsync()

    return () => controller.abort()
  }, [])

  useEffect(() => {
    const abortFn = getPizzaData()
    return () => abortFn()
  }, [getPizzaData])

  return { data, isLoading }
}
