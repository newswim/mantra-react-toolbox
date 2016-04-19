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
    FlowRouter.go('/login');
  },

  inputValue({LocalState}, ...thingTyped) {
    return LocalState.set('USER_INPUT_VALUE', ...thingTyped);
  },

  clearErrors({LocalState}) {
    return LocalState.set('CREATE_USER_ERROR', null);
  }
}
