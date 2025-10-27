import { useContext } from 'react'
import { CartContext } from '../context/CartContext/CartContext'

export const useCartState = () => useContext(CartContext)
