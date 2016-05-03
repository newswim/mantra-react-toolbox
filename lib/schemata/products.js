import { Meteor } from 'meteor/meteor'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

export const ProductSchema = new SimpleSchema({
  // productId:        { type: String },
  productName:      { type: String },
  mfrName:          { type: String },
  partNumber:       { type: String },
  description:      { type: String },
  productType:      { type: String },
  vendorName:       { type: String },
  vendorPartNumber: { type: String },
  perFoot:          { type: String },   // Should be Boolean
  listPrice:        { type: String },
  purchasePrice:    { type: String },
  laborUnit:        { type: String },
  website:          { type: String },
  dateLastEdited:   { type: String },
  active:           { type: String },   // Should be Boolean
})
