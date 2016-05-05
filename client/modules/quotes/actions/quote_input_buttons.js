import _ from 'lodash'

/* QUOTE FIELDS

REQUIRED:
dateCreated
opptyName
contactName
orgName
location
taxable
laborRate
projMgmtPct
defLength

OPTIONAL:
taxRate
assignedTo
quoteStage
marginPct
active
defAdHoc
taxedOnCost

*/

export default {

  cancelQuote({FlowRouter}) {
// console.log("canceling...")
    FlowRouter.go('/')
  },

  createQuote({Meteor, LocalState, FlowRouter}) {
    const states = [
      'USER_INPUT_QUOTE',
      'USER_INPUT_CONTACT',
      'USER_INPUT_ORG',
      'USER_INPUT_LOC',
      'USER_INPUT_TAXABLE',
      'USER_INPUT_LABOR',
      'USER_INPUT_PROJECT_MGMT',
      'USER_INPUT_RUN_LENGTH',
    ]

    const opptyName    = LocalState.get('USER_INPUT_QUOTE')
    const contactName  = LocalState.get('USER_INPUT_CONTACT')
    const orgName      = LocalState.get('USER_INPUT_ORG')
    const location     = LocalState.get('USER_INPUT_LOC')
    // default options
    const taxable      = LocalState.get('USER_INPUT_TAXABLE')
    const laborRate    = LocalState.get('USER_INPUT_LABOR')
    const projMgmtPct  = LocalState.get('USER_INPUT_PROJECT_MGMT')
    const defLength    = LocalState.get('USER_INPUT_RUN_LENGTH')

    check(opptyName, String)
    check(contactName, String)
    check(orgName, String)
    check(location, String)
    check(taxable, String)
    check(laborRate, String)
    check(projMgmtPct, String)
    check(defLength, String)

    const newQuote = {
      opptyName,
      contactName,
      orgName,
      location,
      taxable,
      laborRate,
      projMgmtPct,
      defLength
    }

console.log(`creating new quote: ${opptyName}`)

    // Try to create a new quote
console.log(newQuote)

    // check that the Quote isn't missing any fields
    // // should probably use Yup for this . .
    if (Object.keys(newQuote).length > 4) {
      try {
        Meteor.call('quotes.createNew', newQuote)
        //
        // Reset local state somehow
        //
        states.map((state) => {
          LocalState.set(state, '')
        })
console.log('going back home')
        return FlowRouter.go('/')

      } catch (err) {
        throw err
      }
    } else {
      LocalState.set('USER_INPUT_QUOTE_ERROR', `looks like you're missing some fields.`)
    }
  },
  clearErrors({LocalState}) {
    // Clear any locally saved error statements
    LocalState.set('USER_INPUT_QUOTE_ERROR', null)
  }
}
