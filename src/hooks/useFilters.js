import { useContext } from 'react'
import { FiltersBarContext } from '../context/FiltersBarContext/FiltersBarContext'

export const useFilters = () => useContext(FiltersBarContext)
