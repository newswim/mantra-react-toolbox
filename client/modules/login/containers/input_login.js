import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import { InputLogin } from '../components/input_login.jsx';

export const composer = ({context}, onData) => {
  const {LocalState} = context();

  if (!LocalState.get('LOGIN_ERROR')) {
    LocalState.set('LOGIN_ERROR', '')
  }

  if (!LocalState.get('USER_INPUT_VALUE')) {
    LocalState.set('USER_INPUT_VALUE', '')
  }

  const inputVal = LocalState.get('USER_INPUT_VALUE')
  const error = LocalState.get('LOGIN_ERROR')

  console.log(`from composer: inputVal: ${inputVal}`)
  onData(null, {inputVal, error});

};

export const depsMapper = (context, actions) => ({
  context: () => context,
  loginUser: actions.users.login,
  logout: actions.users.logout,
  goCreate: actions.users.goCreate,
  inputValue: actions.users.inputValue
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(InputLogin);
