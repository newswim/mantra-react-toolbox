export default {
  updateLocalState({Meteor, LocalState}, name, value) {
    console.log(`from action: ${name}: ${value}`)
    switch (name) {
      case "taxable":
        return LocalState.set("USER_INPUT_TAXABLE", value)
      case "labor":
        return LocalState.set("USER_INPUT_LABOR", value)
      case "projectMgmt":
        return LocalState.set("USER_INPUT_PROJECT_MGMT", value)
      case "runLength":
        return LocalState.set("USER_INPUT_RUN_LENGTH", value)
      default:
        return LocalState.set('USER_INPUT_ERROR', 'There was some error.');
    }

  },

  clearErrors({LocalState}) {
   return LocalState.set('ERROR', null);
  },

  clearAll({LocalState}) {
    LocalState.set("USER_INPUT_TAXABLE", null)
    LocalState.set("USER_INPUT_LABOR", null)
    LocalState.set("USER_INPUT_PROJECT_MGMT", null)
    LocalState.set("USER_INPUT_RUN_LENGTH", null)
  }
};
