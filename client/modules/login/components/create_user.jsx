import React  from 'react'
import styles from './input_login.mss'
import Input  from 'react-toolbox/lib/input';
import { BaseComponent } from '/client/modules/react_utils'

export class CreateUser extends BaseComponent {
  constructor () {
    super()
    this.bindHandlers(
      'handleChange',
      'handleSubmit',
      'handlePass',
      'handleKeyPress'
    )
  }
  render() {
    const { inputVal, passVal, error } = this.props
    return (
      <div className={styles.loginWrapper}>
        <div className={styles.headWrap}>

          <h3 className={styles.fw100}>Welcome to Arrow.</h3>
          <h4 className={styles.fw100}>please create a new account!</h4>

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
            type="password"
            required
            onChange={this.handlePass}
            onKeyPress={this.handleKeyPress}
            value={passVal}
            icon='lock'
            label='Password'
            ref='password'
          />
        <div className={styles.createButton} onClick={this.handleSubmit}><h5>Create</h5></div>
        </div>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}
      </div>
    )
  }

  handleChange(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    // console.log(`from: event handler, ${event}`)

    let thingTyped = event
    const { inputValue } = this.props

    inputValue(thingTyped)
  }

  handleSubmit() {
    const password = this.refs.password.refs.input.value
    const username = this.refs.username.refs.input.value
    let { create } = this.props

    console.log(`creating user, ${username}`)

    create(username, password)

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
      let { create } = this.props

      console.log(`creating user, ${username}`)

      create(username, password)
    }
  }
}
