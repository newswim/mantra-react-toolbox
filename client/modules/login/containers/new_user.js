import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import NewUser from '../components/new_user.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  // const error = LocalState.get('CREATE_USER_ERROR');
  onData(null, {});

  // clearErrors when unmounting the component
  // return clearErrors;
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  create: actions.users.create,
  clearErrors: actions.users.clearErrors
});

export default compose(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NewUser);
