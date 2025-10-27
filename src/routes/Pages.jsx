import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Main from '../pages/Main/Main'
import Cart from './../pages/Cart/Cart'

function Pages({ pizzaData, isLoading }) {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={<Main pizzaData={pizzaData} isLoading={isLoading} />}
        />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  )
}

export default Pages
