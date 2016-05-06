import React from 'react';
import { BaseComponent } from '/client/modules/react_utils'
import Input from 'react-toolbox/lib/input'
import DropdownMenu from '../containers/dropdown_menu'
import FormButtons from '../containers/buttons'
import styles from './quotes.scss'

class QuoteInputLayout extends BaseComponent {
  constructor() {
    super()
    this.state = {
      name:     '',
      contact:  '',
      org:      '',
      loc:      '',
    }
    this.bindHandlers('handleChange')
  }
  render() {
    return (
      <section>
        <div className={styles._quote_sub_heading}>
          <h3>Quote Settings</h3>
        </div>

        <div className={styles._form__wrapper}>
          {this.renderQuotes()}
          <div className={styles._quote_sub_heading}>
            <h4>Default Options</h4>
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
    return [
      { label: "Quote Name:",  ref: "name",    locState: "inputQuote"   },
      { label: "Contact",      ref: "contact", locState: "inputContact" },
      { label: "Organization", ref: "org",     locState: "inputOrg"     },
      { label: "Location",     ref: "loc",     locState: "inputLoc"     },
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
                    value={this.state[quote.ref]}
                    onChange={(event) => this.handleChange(quote.ref, event)}
                  />
        </div>
      )
    })
  }
  handleChange(name, value) {
    this.setState({...this.state, [name]: value})
    // update LocalState since we're getting the value in actions.buttons
    // then calling the insert method
    const { updateLocalState } = this.props
    updateLocalState(name, value)
  }
}

export default QuoteInputLayout
