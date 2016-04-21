import React from 'react';
import { BaseComponent } from '/client/modules/react_utils'
import Input  from 'react-toolbox/lib/input'
import styles from './quotes.mss'

export class Quotes extends BaseComponent {
  constructor (props) {
    super(props)

    this.bindHandlers('handleChange')
  }

  render () {
    return (
      <div className={styles.inputWrapper}>
        {this.renderQuotes()}
      </div>
    )
  }

  getQuotes() {

    const { error, inputQuote, inputContact, inputOrg, inputLoc } = this.props

    return [
      { label: "Quote Name:",  ref: "name",    locState: "inputQuote", inputVal: inputQuote },
      { label: "Contact",      ref: "contact", locState: "inputContact", inputVal: inputContact },
      { label: "Organization", ref: "org",     locState: "inputOrg", inputVal: inputOrg },
      { label: "Location",     ref: "loc",     locState: "inputLoc", inputVal: inputLoc }
    ]
  }

  renderQuotes() {
    return this.getQuotes().map((quote) => {
      return  <Input required
                type='text'
                maxLength={24}
                label={quote.label}
                ref={quote.ref}
                value={quote.inputVal}
                key={quote.ref}
                onChange={(event) => this.handleChange(locState = quote.locState, event)}
              />
    })
  }

  handleChange(locState, event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    console.log(`from handler: ${locState}, ${event}`)
    // let thingTyped = event
    const { inputValue } = this.props

    inputValue(locState, event)
  }
}

// locState = quote.locState, {...event}
