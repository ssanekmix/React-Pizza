const API_URL = 'https://68eeb203b06cc802829b17c9.mockapi.io/react-pizza'

export const fetchData = async () => {
  try {
    const response = await fetch(API_URL)
    if (!response.ok) {
      throw new Error(
        `Ошибка при загрузке данных: ${response.status} ${response.statusText}`
      )
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error(`HTTP ошибка`, error)
    return []
  }
}
