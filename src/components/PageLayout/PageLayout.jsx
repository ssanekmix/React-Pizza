import Header from '../Header/Header'

const PageLayout = ({ isOnMainPage, children }) => {
  return (
    <>
      <Header isOnMainPage={isOnMainPage}>{children}</Header>
    </>
  )
}
export default PageLayout
