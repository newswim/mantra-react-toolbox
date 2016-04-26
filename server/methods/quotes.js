import {Quotes} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'quotes.createNew'(newQuote) {
      check(newQuote, Object)
      const createdAt = new Date()
      const quote = {newQuote, createdAt}
      const insertQuote = Quotes.insert(quote);

      console.log(`Added ${quote.name} to Quotes`)

      return insertQuote
    }
  });
}
