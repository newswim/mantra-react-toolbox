import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import DropdownMenu from '../components/dropdown_menu.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  setDefault: actions.dropdown_menu.setDefaultOptions
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(DropdownMenu);
