import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import AltLayout from '../components/alt_layout.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context()

  const toggle_drawer = LocalState.get('TOGGLE_DRAWER')
  const pin_drawer    = LocalState.get('PIN_DRAWER')
  const toggle_side   = LocalState.get('TOGGLE_SIDE')

  const data = {toggle_drawer, pin_drawer, toggle_side}

  onData(null, { data} )
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  toggleDrawer: actions.alt_layout.toggleDrawer
})

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(AltLayout)
