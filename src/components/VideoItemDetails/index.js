import './index.css'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'

import {Component} from 'react'
import {BiLike, BiDislike} from 'react-icons/bi'
import {AiFillSave} from 'react-icons/ai'
import Header from '../Header'
import SideHeader from '../SideHeader'

class VideoItemDetails extends Component {
  state = {videoItem: {}}

  componentDidMount() {
    this.getVideoItem()
  }

  getUpdatedData = each => ({
    id: each.id,
    title: each.title,
    videoUrl: each.video_url,
    thumbnailUrl: each.thumbnail_url,
    name: each.channel.name,
    profileImageUrl: each.channel.profile_image_url,
    subscriberCount: each.channel.subscriber_count,
    viewCount: each.view_count,
    publishedAt: each.published_at,
    description: each.description,
  })

  getVideoItem = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = this.getUpdatedData(data.video_details)

      this.setState({videoItem: updatedData})
    }
  }

  render() {
    const {videoItem} = this.state
    const {
      videoUrl,
      id,
      title,
      thumbnailUrl,
      name,
      profileImageUrl,
      subscriberCount,
      viewCount,
      description,
      publishedAt,
    } = videoItem
    return (
      <>
        <Header />
        <div className="vimain">
          <SideHeader />
          <div className="vicont">
            <ReactPlayer url={videoUrl} />
            <h1>{title}</h1>
            <div className="vitext">
              <div className="viview1">
                <p>{viewCount} views</p>
                <p>{publishedAt} years ago</p>
              </div>
              <div className="viview2">
                <p>
                  <BiLike />
                  Like
                </p>
                <p>
                  <BiDislike />
                  Dislike
                </p>
                <p>
                  <AiFillSave />
                  Save
                </p>
              </div>
            </div>
            <hr />
            <div className="vilogo">
              <img src={thumbnailUrl} alt="vilogo" className="channellogo" />
              <div className="vilast">
                <p>{name}</p>
                <p>{subscriberCount} subscribers</p>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default VideoItemDetails
