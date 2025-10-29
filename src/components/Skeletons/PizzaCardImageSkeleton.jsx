import ContentLoader from 'react-content-loader'

const PizzaCardImageSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={280}
    viewBox="0 0 280 280"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="140" cy="140" r="138" />
  </ContentLoader>
)

export default PizzaCardImageSkeleton
