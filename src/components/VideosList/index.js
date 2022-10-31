import './index.css'
import {Link} from 'react-router-dom'

const VideosList = props => {
  const {videosDetails} = props
  const {
    thumbnailUrl,
    profileImageUrl,
    title,
    id,
    channel,
    viewCount,
    publishedAt,
  } = videosDetails

  return (
    <Link to={`/videos/${id}`}>
      {' '}
      <li className="listitemcontainer">
        <img src={thumbnailUrl} alt="listicon" className="homelistimage" />
        <div className="profilecont">
          <img
            src={profileImageUrl}
            alt="listicon"
            className="profilelistimage"
          />
          <p>{title}</p>
        </div>
        <p>{channel}</p>

        <p>
          {viewCount} views . {publishedAt} years ago
        </p>
      </li>
    </Link>
  )
}

export default VideosList
