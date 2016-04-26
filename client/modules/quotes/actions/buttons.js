export default {

  cancelQuote({Meteor, LocalState, FlowRouter}) {
    console.log("canceling...");
    FlowRouter.go('/')
  },

  createQuote({Meteor, LocalState, FlowRouter, clearAll}) {
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
    console.log(`creating new quote: ${newQuote}`);
    Meteor.call('quotes.createNew', newQuote)
    Meteor.setTimeout(() => {
      FlowRouter.go('/')
    }, 100)
    debugger
    return clearAll
  },
  clearAll({Meteor, LocalState}) {
    LocalState.set('USER_INPUT_QUOTE', null)
    LocalState.set('USER_INPUT_CONTACT', null)
    LocalState.set('USER_INPUT_ORG', null)
    LocalState.set('USER_INPUT_LOC', null)
    LocalState.set('USER_INPUT_TAXABLE', null)
    LocalState.set('USER_INPUT_LABOR', null)
    LocalState.set('USER_INPUT_PROJECT_MGMT', null)
    LocalState.set('USER_INPUT_RUN_LENGTH', null)
  }
}
