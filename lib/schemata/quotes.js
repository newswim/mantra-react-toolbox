import { Meteor } from 'meteor/meteor'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

/*
QUOTES

Collection Schema - will occur in two states. When a new Quote is first created,
initial fields are added, then later, the remaining optional fields.

opptyName,
contactName,
orgName,
location,
taxable,
laborRate,
projMgmtPct,
defLength,

*/

export const QuoteSchema = new SimpleSchema({
  // quoteId:     { type: String },
  dateCreated: { type: Date,      optional: true,     label: 'Date Created' },
  opptyName:   { type: String, /* optional: false, */ label: 'Opportunity Name' },
  contactName: { type: String, /* optional: false, */ label: 'Contact Name' },
  orgName:     { type: String, /* optional: false, */ label: 'Organization Name' },
  location:    { type: String, /* optional: false, */ label: 'Location' },
  taxable:     {
    type: String,
    /* optional: false, */
    label: 'Taxable',
    allowedValues: ['Yes','Yes (on cost)','No']
  },         // should be Boolean
  laborRate:   { type: Number,    optional: true,     label: 'Labor Rate' },
  projMgmtPct: { type: String, /* optional: false, */ label: 'Project Management %' },
  defLength:   { type: Number, /* optional: false, */ label: 'Default Run Length' },      // FIXME: same as Run Length ?
  taxRate:     { type: String,  optional: true,  label: 'Tax Rate' },
  assignedTo:  { type: String,  optional: true,  label: 'Assigned To' },
  quoteStage:  { type: String,  optional: true,  label: 'Quote Stage' },
  marginPct:   { type: String,  optional: true,  label: 'Margin Pct' },
  active:      { type: Boolean, optional: true,  label: 'Active' },
  defAdHoc:    { type: Boolean, optional: true,  label: 'DEF-AdHoc' },
  taxedOnCost: { type: Boolean, optional: true,  label: 'Taxed On Cost' },
})


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
