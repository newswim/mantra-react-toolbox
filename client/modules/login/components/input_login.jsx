import React  from 'react'
import styles from './input_login.mss'
import Input  from 'react-toolbox/lib/input';
import { BaseComponent } from '/client/modules/react_utils'

export class InputLogin extends BaseComponent {
  constructor () {
    super()
    this.bindHandlers(
      'handleChange',
      'handleLogin'
    )

  }
  render() {
    const { inputVal, error } = this.props
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
            onChange={this.handleChange}
            value={inputVal}
            icon='person'
            label='Username'
            ref='username'
          />
          <Input
            required
            icon='lock'
            label='Password'
            ref='password'
          />
          <div className={styles.loginButton} onClick={this.handleLogin}><h5>Login</h5></div>
        </div>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}
      </div>
    )
  }

  handleChange(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    console.log(`from: event handler, ${event}`)

    let thingTyped = event

    const { inputValue } = this.props

    inputValue(thingTyped)
  }

  handleLogin(e) {
    e.preventDefault()
    const { username, password } = this.refs
    const { loginUser } = this.props

    console.log("logging in")

    loginUser(username.value, password.value)

  }
}
