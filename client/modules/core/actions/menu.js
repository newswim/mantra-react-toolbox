export default {
  _goProducts({Meteor, LocalState, FlowRouter}) {
    FlowRouter.go('/products')
  },
  _goHome({Meteor, LocalState, FlowRouter}) {
    FlowRouter.go('/')
  },
  _goQuotes({Meteor, LocalState, FlowRouter}) {
    FlowRouter.go('/quotes')
  }
}
