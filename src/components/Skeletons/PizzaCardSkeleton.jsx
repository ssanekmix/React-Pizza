import ContentLoader from 'react-content-loader'

const PizzaCardSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="140" cy="140" r="138" />
    <rect x="0" y="291" rx="0" ry="0" width="280" height="24" />
    <rect x="0" y="337" rx="0" ry="0" width="280" height="85" />
    <rect x="0" y="446" rx="0" ry="0" width="89" height="27" />
    <circle cx="150" cy="464" r="25" />
    <rect x="150" y="439" rx="0" ry="0" width="105" height="50" />
    <circle cx="255" cy="464" r="25" />
  </ContentLoader>
)

export default PizzaCardSkeleton
