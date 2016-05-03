import _ from 'lodash'

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
    const inputQuote   = LocalState.get('USER_INPUT_QUOTE')
    const inputContact = LocalState.get('USER_INPUT_CONTACT')
    const inputOrg     = LocalState.get('USER_INPUT_ORG')
    const inputLoc     = LocalState.get('USER_INPUT_LOC')
    // default options
    const taxable      = LocalState.get('USER_INPUT_TAXABLE')
    const labor        = LocalState.get('USER_INPUT_LABOR')
    const projectMgmt  = LocalState.get('USER_INPUT_PROJECT_MGMT')
    const runLength    = LocalState.get('USER_INPUT_RUN_LENGTH')

    const newQuote = {
      inputQuote,
      inputContact,
      inputOrg,
      inputLoc,
      taxable,
      labor,
      projectMgmt,
      runLength
    }

    console.log(`creating new quote: ${newQuote.inputQuote}`)

    // Try to create a new quote
    console.log(_.values(newQuote))

    // check that the Quote isn't missing any fields
    // // shold probably use Yup for this . .
    if (Object.keys(newQuote).length > 4) {
      try {
        Meteor.call('quotes.createNew', newQuote)
        //
        // Reset local state somehow
        //
        states.forEach((state) => {
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
    return
  },
  clearErrors({LocalState}) {
    // Clear any locally saved error statements
    LocalState.set('USER_INPUT_QUOTE_ERROR', null)
  }
}
