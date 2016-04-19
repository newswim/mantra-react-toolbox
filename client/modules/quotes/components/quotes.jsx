import React from 'react';
import { BaseComponent } from '/client/modules/react_utils'

export class Quotes extends BaseComponent {
  constructor () {
    super()

    let a = 12;
  }

  render () {
    return (
      <section>
        <input id="quote-name" placeholder="Name"></input>
      </section>
    )
  }
}
