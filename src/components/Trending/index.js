import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import TrendingItem from '../TrendingItem'
import Header from '../Header'
import SideHeader from '../SideHeader'

class Trending extends Component {
  state = {trendingList: []}

  componentDidMount() {
    this.getTrendingList()
  }

  getTrendingList = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
      this.setState({trendingList: updatedData})
    }
  }

  render() {
    const {trendingList} = this.state
    return (
      <>
        <Header />

        <div className="shcont">
          <SideHeader />
          <div className="trendheading">
            <h1>Trending Videos</h1>

            <ul className="trendinglistcont">
              {trendingList.map(each => (
                <TrendingItem trendingDetails={each} key={each.id} />
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }
}
export default Trending
