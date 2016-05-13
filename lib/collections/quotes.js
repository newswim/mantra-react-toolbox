import { Mongo }       from 'meteor/mongo'
import { QuoteSchema } from '../schemata/quotes'

const Quotes = new Mongo.Collection('quotes')

Quotes.attachSchema(QuoteSchema)

export default Quotes
