export default {
  goToRoute({Meteor, FlowRouter}, route) {
    FlowRouter.go(route)
  },

  goToQuote({Meteor, FlowRouter}, quoteId) {

    console.log(`going to route: /quote/${quoteId}`)

    return FlowRouter.go(`/quote/${quoteId}`)
  }
};
