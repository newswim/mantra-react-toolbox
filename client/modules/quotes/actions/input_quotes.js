export default {
  inputValue({LocalState}, locState, ...thingTyped) {
    console.log(`from action: ${locState}: ${thingTyped}`)

    // "forward-seeking reduction machine"
    // if these functions
    switch (locState) {
      case locState === "inputQuote":
        return LocalState.set("USER_INPUT_QUOTE", ...thingTyped)
      case "inputContact":
        return LocalState.set("USER_INPUT_CONTACT", ...thingTyped)
      case "inputOrg":
        return LocalState.set("USER_INPUT_ORG", ...thingTyped)
      case "inputLoc":
        return LocalState.set("USER_INPUT_LOC", ...thingTyped)
      default:
        return;
    }
  }
}
