import { Mongo } from 'meteor/mongo'
import QuoteSchema from '../schemata/quotes'

const Quotes = new Mongo.Collection('quotes')


// let quoteSchema = new SimpleSchema({
//   ProgMgmtPct: {
//     type: Number,
//     // blackbox: true,
//     optional: true
//   },
//   TaxedOnCost: {
//     type: Boolean /*,
//     blackbox: true */
//   }
// })

Quotes.attachSchema(QuoteSchema)


export default Quotes
