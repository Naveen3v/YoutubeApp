import './index.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiFillHome} from 'react-icons/ai'
import Header from '../Header'
import VideosList from '../VideosList'
import SideHeader from '../SideHeader'

class Home extends Component {
  state = {searchInput: '', videosList: []}

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/all?search='
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        channel: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))
      this.setState({videosList: updatedData})
    }
  }

  render() {
    const {searchInput, videosList} = this.state
    return (
      <>
        <Header />
        <div className="homecont">
          <SideHeader />
          <div className="homevideo">
            <div className="homebgcontainer">
              <div className="deletecont">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="navlogo"
                  className="homevideoimage"
                />
                <button>X</button>
              </div>
              <p>Buy Nxt Watch PrepaidPlans with UPI</p>
              <button>Get It Now</button>
            </div>
            <input type="search" placeholder="search" value={searchInput} />
            <ul className="videosListContainer">
              {videosList.map(each => (
                <VideosList videosDetails={each} key={each.id} />
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }
}
export default Home
