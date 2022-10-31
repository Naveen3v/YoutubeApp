import './index.css'
import {FaMoon} from 'react-icons/fa'
import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'

const Header = props => {
  const enterLogin = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <navbar>
      <div className="navcontainer">
        <Link to="/">
          {' '}
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="navlogo"
            className="navimage"
          />
        </Link>
        <div className="navtext">
          <FaMoon className="sorticon" />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
            className="profileimage"
          />
          <button type="button" className="navbtn" onClick={enterLogin}>
            Logout
          </button>
        </div>
      </div>
    </navbar>
  )
}
export default withRouter(Header)
