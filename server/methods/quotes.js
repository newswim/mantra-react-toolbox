import {Quotes} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'quotes.createNew'(newQuote) {
      const dateCreated = new Date()
      const { opptyName, contactName, orgName, location, taxable, laborRate, projMgmtPct, defLength
      } = newQuote
      check(newQuote,     Object)
      check(dateCreated,  Date)
      check(opptyName,    String)
      check(contactName,  String)
      check(orgName,      String)
      check(location,     String)
      check(taxable,      String)
      check(laborRate,    String)
      check(projMgmtPct,  String)
      check(defLength,    String)

      const quote = {
        opptyName,
        contactName,
        orgName,
        location,
        taxable,
        laborRate,
        projMgmtPct,
        defLength,
        dateCreated,    // add date
      }

      try {
        const insertQuote = Quotes.insert(quote);
        console.log(`Adding ${opptyName} to Quotes`)
        return insertQuote
      } catch (err) {
        throw err
      }
    }
  });
}
