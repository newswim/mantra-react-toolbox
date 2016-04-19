import Menu from '../components/menu.jsx'
import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core'

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  _goProducts: actions.menu._goProducts,
  _goHome: actions.menu._goHome,
  _goQuotes: actions.menu._goQuotes,
  _handleLogout: actions.menu._handleLogout,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Menu);
