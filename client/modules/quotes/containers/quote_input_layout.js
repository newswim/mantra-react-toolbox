import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import QuoteInputLayout from '../components/quote_input_layout.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  updateLocalState: actions.quote_input_layout.updateLocalState
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(QuoteInputLayout);
