import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import { InputLogin } from '../components/input_login.jsx';

export const composer = ({context}, onData) => {
  const {LocalState} = context();

  if (!LocalState.get('USER_INPUT_VALUE')) {
    LocalState.set('USER_INPUT_VALUE', '')
  }

  const inputVal = LocalState.get('USER_INPUT_VALUE');
  console.log(`inputVal: ${inputVal}`)
  onData(null, {inputVal});

};

export const depsMapper = (context, actions) => ({
  context: () => context,
  login: actions.users.login,
  inputValue: actions.users.inputValue
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(InputLogin);
