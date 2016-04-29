import { Mongo } from 'meteor/mongo'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

const Quotes = new Mongo.Collection('quotes');

/* FIELDS

ID;
OpptyName;
 AssignedTo;
  OrgName;
   ContactName;
    ProgMgmtPct;

TaxRate;
 DateCreated;
  QuoteStage;
   MarginPct;
    LaborRate;
     DefLength;

Taxable (bool);
 Active (bool);
  DEF-AdHoc (bool);
    TaxedOnCost (bool);

*/

let quoteSchema = new SimpleSchema({
  ProgMgmtPct: {
    type: Number,
    // blackbox: true,
    optional: true
  },
  TaxedOnCost: {
    type: Boolean /*,
    blackbox: true */
  }
});

Quotes.attachSchema(quoteSchema)


export default Quotes;
