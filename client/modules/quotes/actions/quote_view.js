import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { QuoteSchema } from '/lib/schemata/quotes'

export default {
  add({Meteor, LocalState, Collections}, newQuote) {

    const {
      quoteName,
      contact,
      org,
      location,
      taxable,
      laborRate,
      projMgmtPct
    } = newQuote

    const validateNewQuote = new ValidatedMethod({
      name: 'quote.add',
      validate: QuoteSchema.validator(),
      user: Meteor.userId(),

    })
  }

}
