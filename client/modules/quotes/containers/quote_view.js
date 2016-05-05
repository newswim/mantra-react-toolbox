import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import QuoteView from '../components/quote_view.jsx';

export const composer = ({
  quoteId,
  Quotes
}, onData) => {

  if (!quoteId) {
    console.log('didn\'t find a quoteId')
    return onData(null, {})
  }
  if (Meteor.subscribe('quotes.one', quoteId).ready) {
    console.log(quoteId)
    const quote = Quotes.findOne({_id: quoteId})

    onData(null, { })
  }
}

export const depsMapper = (context, actions) => {
  const {Meteor, Collections, FlowRouter} = context
  const {Quotes} = Collections
  const quoteId = FlowRouter.current().params.quoteId

  return {
    Meteor,
    Quotes,
    quoteId
  }
}

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(QuoteView);
