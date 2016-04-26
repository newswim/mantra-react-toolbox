import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import FormButtons from '../components/buttons.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  cancelQuote: actions.buttons.cancelQuote,
  createQuote: actions.buttons.createQuote,
  clearAll: actions.buttons.clearAll

});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(FormButtons);
