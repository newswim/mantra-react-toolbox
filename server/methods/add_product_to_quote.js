import { Quotes, Products } from '/lib/collections'
import { Meteor } from 'meteor/meteor'
import { check }  from 'meteor/check'

// fetch relevent info on current Quote

const currentQuote = (quoteId) => Quotes.findOne({ _id: quoteId })
const currentProd = (productId) => Products.findOne({ _id: productId })

const productCount = (quoteId) => Quotes.find({
  quoteId,
  productInQuote: true
}).count()

// add a product to a Quote (or Section)

export default function () {
  Meteor.methods({
    'quote.addProduct'(quoteId, section, productId) {
      Quotes.update({_id: quoteId}) // push product to a _products field
    }
  })
  Meteor.methods({
    'quote.incProduct'(quoteId, section, productId, quantity) {
      check(quoteId, String)
      check(section, String)
      check(productId, String)
      check(quantity, Number)

      // increment the quantity field of the Product within Quote

    }
  })
  Meteor.methods({
    'quote.decProduct'(quoteId, section, productId) {

    }
  })
}
