import React from 'react'
import { BaseComponent } from '/client/modules/react_utils'
import Table from 'react-toolbox/lib/table'

// QUOTE_TABLE
// QUOTE_LINE_ITEM (Aka one product, and we'll update the quantity)



const UserModel = {
  name: {type: String},
  twitter: {type: String},
  birthdate: {type: Date},
  cats: {type: Number},
  dogs: {type: Number},
  active: {type: Boolean}
}

// const ProductModel = {
//   item:         {type: String},
//   manufacturer: {type: String},
//   model:        {type: String},
//   description:  {type: String},
//   unitCost:     {type: Number},
//   qty:          {type: Number},
//   totalCost:    {type: Number},
//   margin:       {type: Number},
//   phase:        {type: String}
// }

const users = [
  {name: 'Javi Jimenez', twitter: '@soyjavi', birthdate: new Date(1980, 3, 11), cats: 1},
  {name: 'Javi Velasco', twitter: '@javivelasco', birthdate: new Date(1987, 1, 1), dogs: 1, active: true}
]

class QuoteTable extends BaseComponent {
  constructor() {
    super()
    this.state = {
      selected: [],
      source: users
    }
    this.bindHandlers('handleChange', 'handleSelect')
  }

  handleChange(row, key, value) {
    const source = this.state.source
    source[row][key] = value
    this.setState({source})
  }

  handleSelect(selected) {
    this.setState({selected})
  }

  render () {
    return (
      <Table
        model={UserModel}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        selectable
        selected={this.state.selected}
        source={this.state.source}
      />
    )
  }
}

// Proptypes

export default QuoteTable
