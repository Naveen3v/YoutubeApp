import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

class Login extends Component {
  state = {username: '', password: '', errorState: false, errorMsg: ''}

  componentDidMount() {}

  onSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props

    history.replace('/')
  }

  onFailure = errorMsg => {
    this.setState({errorState: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSuccess(data.jwt_token)
    } else {
      this.onFailure(data.error_msg)
    }
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, errorState, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="logincont">
        <div className="innercont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="watchlogo"
            className="loginimage"
          />
          <form className="formcontainer" onSubmit={this.submitForm}>
            <label htmlFor="username" className="label">
              USERNAME
            </label>
            <input
              type="text"
              value={username}
              id="username"
              placeholder="Username"
              onChange={this.changeUsername}
            />
            <label htmlFor="password" className="label">
              PASSWORD
            </label>
            <input
              type="password"
              value={password}
              id="password"
              placeholder="Password"
              onChange={this.changePassword}
            />
            <div className="checkboxcont">
              <input type="checkbox" id="checkbox" value="checkbox" />
              <label htmlFor="checkbox">Show Password</label>
            </div>
            <button type="submit" className="submitbtn">
              Login
            </button>
            {errorState && <p>{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}
export default Login
