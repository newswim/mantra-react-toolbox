export default {
  toggleDrawer({Meteor, LocalState, FlowRouter} /*, title, content*/) {

    LocalState.set('TOGGLE_DRAWER', !LocalState.get('TOGGLE_DRAWER'));

    console.log(LocalState.get('TOGGLE_DRAWER'))

  },

  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
};

/*

ACTIONS

_toggleDrawerActive
_toggleDrawerPinned
_toggleSidebar

*/
