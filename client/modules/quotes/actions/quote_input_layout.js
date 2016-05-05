export default {
  updateLocalState({LocalState}, name, value) {
console.log(`from action: ${name}: ${value}`)
    switch (name) {
      case "name":
        return LocalState.set("USER_INPUT_QUOTE", value)
      case "contact":
        return LocalState.set("USER_INPUT_CONTACT", value)
      case "org":
        return LocalState.set("USER_INPUT_ORG", value)
      case "loc":
        return LocalState.set("USER_INPUT_LOC", value)
      default:
        return LocalState.set('USER_INPUT_ERROR', 'There was some error.');
    }
  }
}
