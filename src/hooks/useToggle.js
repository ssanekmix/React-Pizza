import { useCallback, useState } from 'react'

export const useToggle = (initialValue) => {
  const [state, setState] = useState(initialValue)
  const toggle = useCallback(() => setState((prev) => !prev), [])
  return [state, toggle]
}
