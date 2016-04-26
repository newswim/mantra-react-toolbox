export default {
  inputValue({LocalState}, locState, thingTyped) {
    console.log(`from action: ${locState}: ${thingTyped}`)

    // "forward-seeking reduction machine"
    // debugger
    switch (locState) {
      case "inputQuote":
        return LocalState.set("USER_INPUT_QUOTE", thingTyped)
      case "inputContact":
        return LocalState.set("USER_INPUT_CONTACT", thingTyped)
      case "inputOrg":
        return LocalState.set("USER_INPUT_ORG", thingTyped)
      case "inputLoc":
        return LocalState.set("USER_INPUT_LOC", thingTyped)
      default:
        return LocalState.set('USER_INPUT_ERROR', 'There was some error.');
    }
  },
  create({Meteor, LocalState}, myParam) {

    // e.g. update local state
    LocalState.set('CREATE_QUOTE_ERROR', null);
    if (!myParam) {
     LocalState.set('CREATE_QUOTE_ERROR', 'new quote is missing some fields.');
     return;
    }

    // update remote state
    Meteor.call('quotes.createNew', id, newQuote, notes, (err) => {
     if (err) {
       alert(`Quote creation failed: ${err.message}`);
     }
    });
  },

  // e.g. clear local state
  clearErrors({LocalState}) {
   return LocalState.set('CREATE_QUOTE_ERROR', null);
  }
}
