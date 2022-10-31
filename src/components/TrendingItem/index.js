import './index.css'

const TrendingItem = props => {
  const {trendingDetails} = props
  const {
    thumbnailUrl,
    profileImageUrl,
    title,
    id,
    channel,
    viewCount,
    publishedAt,
  } = trendingDetails
  return (
    <li className="trendinglistitem">
      <div className="tcont">
        <img src={thumbnailUrl} alt="ticon" className="timage" />
        <div className="innert">
          <p>{title}</p>
          <p>{channel}</p>
          <p>
            {viewCount} views {publishedAt} years ago
          </p>
        </div>
      </div>
    </li>
  )
}
export default TrendingItem
