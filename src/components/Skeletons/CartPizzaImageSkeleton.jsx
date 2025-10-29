import ContentLoader from 'react-content-loader'

const PizzaCardImageSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={80}
    height={80}
    viewBox="0 0 80 80"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="40" cy="40" r="40" />
  </ContentLoader>
)

export default PizzaCardImageSkeleton
