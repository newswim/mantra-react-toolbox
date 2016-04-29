import React  from 'react'
import styles from './input_login.mss'
import Input  from 'react-toolbox/lib/input'
import { BaseComponent } from '/client/modules/react_utils'

export class InputLogin extends BaseComponent {
  constructor () {
    super()
    this.bindHandlers(
      'handleLogout',
      'handleChange',
      'handlePass',
      'handleCreate',
      'handleLogin',
      'handleKeyPress'
    )
  }

  render() {
    const { inputVal, passVal, error } = this.props
    return (
      <div className={styles.loginWrapper}>
        <div className={styles.headWrap}>

          <h3 className={styles.fw100}>Welcome to Arrow.</h3>
          <h4 className={styles.fw100}>please login to continue</h4>

        </div>
        <div className={styles.loginCard}>
          <Input
            maxLength={16 }
            required
            type='text'
            onChange={this.handleChange}
            value={inputVal}
            icon='person'
            label='Username'
            ref='username'
          />
          <Input
            maxLength={16 }
            required
            onChange={this.handlePass}
            onKeyPress={this.handleKeyPress}
            value={passVal}
            type='password'
            icon='lock'
            label='Password'
            ref='password'
          />
          <div
            className={styles.loginButton}
            onClick={this.handleLogin} >
            <h5>Login</h5>
          </div>
        </div>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}
        <div className={styles.buttonWrap}>
          <span onClick={this.handleCreate} >Create account</span><span> | </span>
          <span onClick={this.handleLogout} >Forget password?</span>
        </div>

      </div>
    )
  }

  handleChange(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    console.log(`from handler: ${event}`)

    let thingTyped = event

    const { inputValue } = this.props

    inputValue(thingTyped)
  }

  handleLogin() {
    const password = this.refs.password.refs.input.value
    const username = this.refs.username.refs.input.value
    const { loginUser } = this.props

    console.log(`logging in, ${username}`)

    loginUser(username, password)

  }

  handleLogout() {
    const { logout } = this.props
    logout()
  }

  handleCreate() {
    const { goCreate } = this.props
    goCreate()
  }

  handlePass(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    let typeType = event

    const { passValue } = this.props

    passValue(typeType)
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      const password = this.refs.password.refs.input.value
      const username = this.refs.username.refs.input.value
      const { loginUser } = this.props

      console.log(`logging in, ${username}`)

      loginUser(username, password)
    }
  }
}
