import React from 'react';
import styles from '/client/stylesheets/buttons.scss'
import { BaseComponent } from '/client/modules/react_utils'

class FormButtons extends BaseComponent {
  constructor(props) {
    super(props)
    this.bindHandlers('cancelButton', 'okButton')
  }

  okButton() {
    console.log("clicking OK");
    const {createQuote} = this.props
    createQuote()
  }

  cancelButton(props) {
    console.log("clicking cancel");
    const { cancelQuote, clearAll } = this.props
    cancelQuote()
  }

  render() {
    return (
      <div className={styles._flex_wrapper}>
        <div
          className={styles._cancel_button}
          onClick={this.cancelButton}> Cancel
        </div>
        <div
          className={styles._ok_button}
          onClick={this.okButton}> OK
        </div>
      </div>
    )
  }
}

export default FormButtons;
