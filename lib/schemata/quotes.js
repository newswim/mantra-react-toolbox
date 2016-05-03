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
  // dateCreated: { type: Date,   /* optional: false, */ label: 'Date Created' },
  opptyName:   { type: String, /* optional: false, */ label: 'Opportunity Name' },
  contactName: { type: String, /* optional: false, */ label: 'Contact Name' },
  orgName:     { type: String, /* optional: false, */ label: 'Organization Name' },
  location:    { type: String, /* optional: false, */ label: 'Location' },
  taxable:     { type: String, /* optional: false, */ label: 'Taxable' },         // should be Boolean
  laborRate:   { type: String, /* optional: false, */ label: 'Labor Rate' },
  projMgmtPct: { type: String, /* optional: false, */ label: 'Project Management %' },
  defLength:   { type: String, /* optional: false, */ label: 'DEF Length' },      // FIXME: same as Run Length ?
  // taxRate:     { type: String, optional: true,  label: 'Tax Rate' },
  // assignedTo:  { type: String, optional: true,  label: 'Assigned To' },
  // quoteStage:  { type: String, optional: true,  label: 'Quote Stage' },
  // marginPct:   { type: String, optional: true,  label: 'Margin Pct' },
  // active:      { type: String, optional: true,  label: 'Active' },          // should be Boolean
  // defAdHoc:    { type: String, optional: true,  label: 'DEF-AdHoc' },       // should be Boolean
  // taxedOnCost: { type: String, optional: true,  label: 'Taxed On Cost' },   // should be Boolean
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
