import './index.css'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'

const SideHeader = () => (
  <navbar>
    <div className="mainnav">
      <div className="homenav">
        <div className="innernav">
          <AiFillHome className="sorticon" />
          <Link to="/">
            <h1 className="navheading">Home</h1>
          </Link>
        </div>
        <div className="innernav">
          <AiFillHome className="sorticon" />
          <Link to="/trending">
            <h1 className="navheading">Trending</h1>
          </Link>
        </div>
        <div className="innernav">
          <AiFillHome className="sorticon" />
          <Link to="/gaming">
            <h1 className="navheading">Gaming</h1>
          </Link>
        </div>
        <div className="innernav">
          <AiFillHome className="sorticon" />
          <h1 className="navheading">Saved videos</h1>
        </div>
      </div>
      <div className="navlogo">
        <h1 className="navheading">CONTACT US</h1>
        <div className="logoimage">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
            className="navlogoimage"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
            className="navlogoimage"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linkedin logo"
            className="navlogoimage"
          />
        </div>
        <p className="navpara">
          Enjow now to see your channels and recommendations
        </p>
      </div>
    </div>
  </navbar>
)
export default SideHeader
