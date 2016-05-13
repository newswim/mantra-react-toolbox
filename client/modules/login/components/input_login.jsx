import React  from 'react'
import styles from './input_login.scss'
import Input  from 'react-toolbox/lib/input'
import { BaseComponent } from '/client/modules/react_utils'

export class InputLogin extends BaseComponent {
  constructor () {
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.bindHandlers(
      'handleLogout',
      'handleChange',
      'handleCreate',
      'handleLogin',
      'handleKeyPress'
    )
  }

  getFields() {
    return [
      { label: "Username", icon: "person", type: "text",     ref: "username" },
      { label: "Password", icon: "lock",   type: "password", ref: "password"  }
    ]
  }

  renderFields() {
    return this.getFields().map((input) => {
      return  (
        <div className={styles._input__wrapper} key={input.ref}>
          <Input
            required
            type={input.type}
            maxLength={24}
            label={input.label}
            icon={input.icon}
            ref={input.ref}
            value={this.state[input.ref]}
            onChange={(event) => this.handleChange(input.ref, event)}
            onKeyPress={this.handleKeyPress}
          />
        </div>
      )
    })
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
          {/* Render the input fields */}
          {this.renderFields()}
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

  handleChange(name, value) {
    this.setState({...this.state, [name]: value})
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
