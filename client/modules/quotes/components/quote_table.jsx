import React from 'react'
import { BaseComponent } from '/client/modules/react_utils'
import Table from 'react-toolbox/lib/table'
import style from './quotes.scss'

// QUOTE_TABLE
// QUOTE_LINE_ITEM (Aka one product, and we'll update the quantity)

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

const ProductModel = {
    item:         {type: Number},
    manufacturer: {type: String},
    model:        {type: String},
    description:  {type: String},
    unitCost:     {type: Number},
    // qty:          {type: Number},
    // totalCost:    {type: Number},
    // margin:       {type: Number},
    phase:        {type: Boolean}
}

const products = [
    { item: 1,  manufacturer: 'Bora Gear',       model: 'KON-101', description: '1U Rack Cooling Fan', unitCost: 119.00, phase: true },
    { item: 2,  manufacturer: 'BoraGear',        model: 'EGB', description: 'Egor Tabs', unitCost: 0.40, phase: true },
    { item: 3,  manufacturer: 'Channel Vision ', model: 'HS-16', description: '16-Way Splitter/Combiner', unitCost: 35.87 },
    { item: 4,  manufacturer: 'Channel Vision ', model: 'CVT-40BID', description: '5-1000mhz RF Amplifier 40DB Gain', unitCost: 172.80 },
    { item: 5,  manufacturer: 'Control4',        model: 'C4-HC800-BL', description: 'Master Dual Core 1.8GHz Processor Controller', unitCost: 900.00, phase: true },
    { item: 6,  manufacturer: 'Control4',        model: 'C4-1UREK-B', description: 'HC-800 Rack Ear Kit', unitCost: 23.40 },
    // { item: 7,  manufacturer: 'Control4',        model: 'C4-IOX-E-B', description: 'IO Extender', unitCost: 300.005 },
    // { item: 8,  manufacturer: 'Control4',        model: 'C4-CBLIR-BULK', description: 'Single IR Flasher', unitCost: 4.00 },
    // { item: 9,  manufacturer: 'Video Storm',     model: 'CMX3838A2', description: 'Audio Matrix Switch', unitCost: 750.00 },
    // { item: 10, manufacturer: 'Video Storm',     model: 'NAB100', description: 'Network Card', unitCost: 399.00 },
    // { item: 11, manufacturer: 'Video Storm',     model: 'CRM ', description: 'CRM Audio Matrix Rack Mount Ears', unitCost: 23.00 }

]


class QuoteTable extends BaseComponent {
    constructor() {
        super()
        this.state = {
            selected: [],
            source: products,
            // TODO: add a checkbox to make fields editable
            editable: false
        }
        this.bindHandlers('_handleChange', '_handleSelect')
    }

    _handleChange(row, key, value) {
        const source = this.state.source
        source[row][key] = value
        this.setState({source})
    }

    _handleSelect(selected) {
        this.setState({selected})
    }

    render () {
        return (
            <Table
                model={ProductModel}
                className={style._quote_table}
                onChange={this._handleChange}
                onSelect={this._handleSelect}
                selectable
                selected={this.state.selected}
                source={this.state.source}
            />
        )
    }
}

// Proptypes

export default QuoteTable
