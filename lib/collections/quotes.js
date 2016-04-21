import { Mongo } from 'meteor/mongo'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

const Quotes = new Mongo.Collection('quotes');

// FIELDS
/*
ID | OpptyName | AssignedTo | OrgName | ContactName | ProgMgmtPct | TaxedOnCost (bool)
TaxRate | DateCreated | QuoteStage | DEF-AdHoc (bool) | MarginPct | LaborRate | DefLength
Taxable (bool) | Active (bool)

*/

let quotesSchema = new SimpleSchema({
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




export default Quotes;
