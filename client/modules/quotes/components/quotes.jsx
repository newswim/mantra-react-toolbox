import React from 'react';
import { BaseComponent } from '/client/modules/react_utils'
import Input  from 'react-toolbox/lib/input'
import styles from './quotes.mss'

export class Quotes extends BaseComponent {
  constructor (props) {
    super(props)
    const { error, inputQuote, inputContact, inputOrg, inputLoc } = this.props
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

    return [
      { label: "Quote Name:",  ref: "name",    locState: "inputQuote", inputVal: this.inputQuote },
      { label: "Contact",      ref: "contact", locState: "inputContact", inputVal: this.inputContact },
      { label: "Organization", ref: "org",     locState: "inputOrg", inputVal: this.inputOrg },
      { label: "Location",     ref: "loc",     locState: "inputLoc", inputVal: this.inputLoc }
    ]
  }

  renderQuotes() {
    return this.getQuotes().map((quote) => {
      return  <Input required
                type='text'
                label={quote.label}
                ref={quote.ref}
                value={quote.inputVal}
                key={quote.ref}
                onChange={this.handleChange(console.log(this))}
              />
    })
  }

  handleChange(event, locState) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    // debugger;
    console.log(`from handler: ${locState}, ${event}`)
    let thingTyped = event
    console.log(thingTyped)
    const { inputValue } = this.props

    inputValue(locState, thingTyped)
  }
}

// locState = quote.locState, {...event}
