import React  from 'react'
import styles from './input_login.mss'
import Input  from 'react-toolbox/lib/input';
import { BaseComponent } from '/client/modules/react_utils'
import { ReactiveVar }   from 'meteor/reactive-var'

export class InputLogin extends BaseComponent {
  constructor () {
    super()
    this.bindHandlers('handleChange')

  }
  render() {
    const { inputVal } = this.props
    return (
      <div className={styles.testClass}>
        <Input  maxLength={16 } required={true} onChange={this.handleChange} value={inputVal} />
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
}
