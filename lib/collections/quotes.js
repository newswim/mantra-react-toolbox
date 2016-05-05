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


// | TODO: commenting this out for now, one or more of the keys seem to be unreadable
// Quotes.attachSchema(QuoteSchema)


export default Quotes
