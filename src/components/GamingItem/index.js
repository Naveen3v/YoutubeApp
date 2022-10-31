import './index.css'

const GamingItem = props => {
  const {gamingDetails} = props
  const {
    thumbnailUrl,

    title,
    id,

    viewCount,
  } = gamingDetails
  return (
    <li className="trendinglistitem">
      <div className="tcontg">
        <img src={thumbnailUrl} alt="ticon" className="timage" />

        <p>{title}</p>

        <p>{viewCount} views</p>
      </div>
    </li>
  )
}
export default GamingItem
