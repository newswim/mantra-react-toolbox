import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import { CreateUser } from '../components/create_user.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();

  if (!LocalState.get('USER_INPUT_VALUE')) {
    LocalState.set('USER_INPUT_VALUE', '')
  }

  const inputVal = LocalState.get('USER_INPUT_VALUE')
  const error = LocalState.get('CREATE_USER_ERROR')

  console.log(`inputVal: ${inputVal}`)
  onData(null, {inputVal, error});

  // clearErrors when unmounting the component
  // return clearErrors
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  create: actions.create_user.create,
  inputValue: actions.create_user.inputValue,
  clearErrors: actions.create_user.clearErrors
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CreateUser);