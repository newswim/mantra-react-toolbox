import {Mongo} from 'meteor/mongo'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

const Manufacturers = new Mongo.Collection('manufacturers')

const mfrSchema = new SimpleSchema({
  MfrName: { type: String }
})

Manufacturers.attachSchema(mfrSchema)

export default Manufacturers;
