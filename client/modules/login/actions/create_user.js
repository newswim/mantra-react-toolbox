import { Accounts } from 'meteor/accounts-base'

export default {
  create({Meteor, LocalState, FlowRouter}, username, password) {
    if (!username) {
      return LocalState.set('CREATE_USER_ERROR', 'Username is required.');
    }

    if (!password) {
      return LocalState.set('CREATE_USER_ERROR', 'Password is required.');
    }

    LocalState.set('CREATE_USER_ERROR', null);

    Accounts.createUser({username, password});

    Meteor.setTimeout(() => {
      FlowRouter.go('/login')
    }, 200)
  },

  inputValue({LocalState}, ...thingTyped) {
    return LocalState.set('USER_NAME_VALUE', ...thingTyped);
  },

  passVal({LocalState}, ...typeType) {
    return LocalState.set('USER_PASS_VALUE', ...typeType);
  },

  clearErrors({LocalState}) {
    return LocalState.set('CREATE_USER_ERROR', null);
  }
}
