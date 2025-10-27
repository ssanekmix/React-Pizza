import { Outlet, useLocation } from 'react-router-dom'
import Header from '../Header/Header'

const Layout = () => {
  const location = useLocation()
  const isOnMainPage = location.pathname === '/'

  return (
    <>
      <Header isOnMainPage={isOnMainPage} />
      <Outlet />
    </>
  )
}
export default Layout
