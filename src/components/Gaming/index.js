import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import GamingItem from '../GamingItem'
import Header from '../Header'
import SideHeader from '../SideHeader'

class Gaming extends Component {
  state = {gamingList: []}

  componentDidMount() {
    this.getGamingList()
  }

  getGamingList = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
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

        viewCount: each.view_count,
      }))
      this.setState({gamingList: updatedData})
    }
  }

  render() {
    const {gamingList} = this.state
    return (
      <>
        <Header />

        <div className="shcont">
          <SideHeader />
          <div className="trendheading">
            <h1>Gaming Videos</h1>

            <ul className="trendinglistcontg">
              {gamingList.map(each => (
                <GamingItem gamingDetails={each} key={each.id} />
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }
}
export default Gaming
