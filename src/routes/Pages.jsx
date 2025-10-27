import { Route, Routes } from 'react-router-dom'
import PageLayout from '../components/PageLayout/PageLayout'
import Main from '../pages/Main/Main'
import Cart from './../pages/Cart/Cart'

function Pages({ pizzaData, isLoading }) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PageLayout isOnMainPage={true}>
            <Main pizzaData={pizzaData} isLoading={isLoading} />
          </PageLayout>
        }
      />
      <Route
        path="/cart"
        element={
          <PageLayout isOnMainPage={false}>
            <Cart />
          </PageLayout>
        }
      />
    </Routes>
  )
}

export default Pages
