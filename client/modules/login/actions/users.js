export default {

  login({Meteor, LocalState, FlowRouter}, username, password) {
    if (!username)
      return LocalState.set('LOGIN_ERROR', 'Username is required.')
    if (!password)
      return LocalState.set('LOGIN_ERROR', 'Password is required.')

    LocalState.set('LOGIN_ERROR', null)

    // TODO: add some error handling
    Meteor.loginWithPassword(username, password)


    console.log(`logging in: ${username}`)

    // This was going too fast for view to be rendered
    Meteor.setTimeout(() => {
      FlowRouter.go('/')
    }, 1000)


  },

  clearErrors({LocalState}) {
    return LocalState.set('LOGIN_ERROR', null);
  },

  inputValue({LocalState}, ...thingTyped) {
    console.log("from action: ", thingTyped)
    return LocalState.set('USER_INPUT_VALUE', ...thingTyped);
  },

  logout({Meteor, FlowRouter}) {
    Meteor.logout()
    FlowRouter.go('/login')
  },

  // emulating some latency
  // We probably want to add some of the transitions, Cedric mocked a horizontal page swipe
  goCreate({Meteor, FlowRouter}) {
    Meteor.setTimeout(() => {
      FlowRouter.go('/create')
    }, 300)
  }
}
