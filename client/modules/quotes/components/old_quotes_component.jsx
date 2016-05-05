import React from 'react';
import { BaseComponent } from '/client/modules/react_utils'
import Input  from 'react-toolbox/lib/input'
import DropdownMenu from '../containers/dropdown_menu'
import FormButtons from '../containers/buttons'
import styles from './quotes.scss'

/* QUOTE FIELDS

quoteId     // -> '_id' from Mongo
opptyName
assignedTo
orgName
contactName
projMgmtPct
taxRate
dateCreated
quoteStage
marginPct
laborRate
defLength
taxable
active
defAdHoc
taxedOnCost

*/

export class OldQuotesForm extends BaseComponent {
  constructor (props) {
    super(props)
    this.bindHandlers('handleChange')
  }

  render () {
    return (
      <section>
        <div className={styles._quote_sub_heading}>
          <h3>Quote Settings</h3>
        </div>

        <div className={styles._form__wrapper}>
          {this.renderQuotes()}
          <div className={styles._quote_sub_heading}>
            <h4>Default Options</h4>
            <br />
          </div>
          <DropdownMenu />
        </div>
        <div className={styles._button_wrapper}>
          <FormButtons />
        </div>
      </section>
    )
  }

  getQuotes() {
    const {
      error,
      inputQuote,
      inputContact,
      inputOrg,
      inputLoc
    } = this.props
    return [
      { label: "Quote Name:",  ref: "name",    locState: "inputQuote", inputVal: inputQuote },
      { label: "Contact",      ref: "contact", locState: "inputContact", inputVal: inputContact },
      { label: "Organization", ref: "org",     locState: "inputOrg", inputVal: inputOrg },
      { label: "Location",     ref: "loc",     locState: "inputLoc", inputVal: inputLoc }
    ]
  }

  renderQuotes() {
    return this.getQuotes().map((quote) => {
      return  (
        <div className={styles._input__wrapper} key={quote.ref}>
          <Input required
                    type='text'
                    maxLength={24}
                    label={quote.label}
                    ref={quote.ref}
                    value={quote.inputVal}
                    onChange={(event) => this.handleChange(locState = quote.locState, event)}
                  />
        </div>
      )
    })
  }

  handleChange(locState, event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    console.log(`from handler: ${locState}, ${event}`)
    // let thingTyped = event
    const { inputValue } = this.props
    // update LocalState
    inputValue(locState, event)
  }
}

// locState = quote.locState, {...event}
