import { Meteor } from 'meteor/meteor'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

export const PhaseSchema = new SimpleSchema({
  phaseId: { type: String },
  phaseName: { type: String },
  active: { type: Boolean },
})
