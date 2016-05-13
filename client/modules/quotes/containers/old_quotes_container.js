import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import {catchErrors}    from '/client/modules/savi-errors'
import { OldQuotesForm } from '../components/old_quotes_component.jsx';

export const composer = ({context}, onData) => {
  const {LocalState} = context();

  if (!LocalState.get('USER_INPUT_QUOTE')) {
    LocalState.set('USER_INPUT_QUOTE', '')
  }
  if (!LocalState.get('USER_INPUT_CONTACT')) {
    LocalState.set('USER_INPUT_CONTACT', '')
  }
  if (!LocalState.get('USER_INPUT_ORG')) {
    LocalState.set('USER_INPUT_ORG', '')
  }
  if (!LocalState.get('USER_INPUT_LOC')) {
    LocalState.set('USER_INPUT_LOC', '')
  }
  if (!LocalState.get('USER_INPUT_ERROR')) {
    LocalState.set('USER_INPUT_ERROR', '')
  }

  const inputQuote   = LocalState.get('USER_INPUT_QUOTE')
  const inputContact = LocalState.get('USER_INPUT_CONTACT')
  const inputOrg     = LocalState.get('USER_INPUT_ORG')
  const inputLoc     = LocalState.get('USER_INPUT_LOC')
  const error        = LocalState.get('USER_INPUT_ERROR')

  onData(null, {
    inputQuote,
    inputContact,
    inputOrg,
    inputLoc,
    error
  });
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  inputValue: actions.input_quotes.inputValue
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(OldQuotesForm);


// INPUT FIELDS NEEDING STATE
/*
QuoteName
Contact
Organization
Location
*/
