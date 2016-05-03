import {Quotes} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'quotes.createNew'(newQuote) {
      check(newQuote, Object)

      const dateCreated = new Date()

      check(dateCreated, Date)

      const {
        opptyName,
        contactName,
        orgName,
        location,
        taxable,
        laborRate,
        projMgmtPct,
        defLength
      } = newQuote

      console.log('hi', opptyName)

      check(opptyName, String)
      check(contactName, String)
      check(orgName, String)
      check(location, String)
      check(taxable, String)
      check(laborRate, String)
      check(projMgmtPct, String)
      check(defLength, String)

      const quote = {
        dateCreated,    // add date
        opptyName,
        contactName,
        orgName,
        location,
        taxable,
        laborRate,
        projMgmtPct,
        defLength
      }

      console.log(quote)

      try {
        const insertQuote = Quotes.insert(quote);

        console.log(`Added ${opptyName} to Quotes`)

        return insertQuote

      } catch (err) {
        throw err
      }

    }
  });
}
