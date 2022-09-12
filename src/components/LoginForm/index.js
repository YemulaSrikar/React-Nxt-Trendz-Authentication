// Write your JS code here

import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showSubmitError: false, errorMsg: ''}

  onSubmitSuccess = () => {
    const {history} = this.props

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onUserInput = event => {
    this.setState({username: event.target.value})
  }

  onPasswordInput = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, errorMsg, showSubmitError} = this.state
    return (
      <div className="image-login-container">
        <div className="login-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="website-login"
          />
          <div className="form-container">
            <form onSubmit={this.submitForm}>
              <div className="nxt-trendz-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                  alt="website logo"
                  className="nxt-trendz-logo"
                />
              </div>
              <div className="label-input-container">
                <div>
                  <label htmlFor="username" className="label">
                    USERNAME
                  </label>
                </div>
                <input
                  id="username"
                  type="text"
                  className="input"
                  placeholder="Username"
                  onChange={this.onUserInput}
                  value={username}
                />
              </div>

              <div className="label-input-container">
                <div>
                  <label htmlFor="password" className="label">
                    PASSWORD
                  </label>
                </div>
                <input
                  id="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                  onChange={this.onPasswordInput}
                  value={password}
                />
              </div>

              <div className="button-container">
                <button type="submit" className="login-button">
                  Login
                </button>
              </div>
              {showSubmitError && <p className="error-msg">*{errorMsg}</p>}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
