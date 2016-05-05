import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import QuoteTopbar from '../components/quote_topbar.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, FlowRouter} = context()

  const quoteId = FlowRouter.current().params.quoteId

  if (!quoteId) {
    console.log('didn\'t find a quoteId')
    return onData(null, {})
  }
  if (Meteor.subscribe('quotes.one', quoteId).ready) {
    const quote = Collections.Quotes.findOne({_id: quoteId})

    return onData(null, { quote })
  }
}


export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(QuoteTopbar);
