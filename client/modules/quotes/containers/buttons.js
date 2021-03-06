import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import FormButtons from '../components/quote_input_buttons.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  cancelQuote: actions.quote_input_buttons.cancelQuote,
  createQuote: actions.quote_input_buttons.createQuote,
  clearAll: actions.quote_input_buttons.clearAll

});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(FormButtons);
