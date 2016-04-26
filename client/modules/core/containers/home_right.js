import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import HomeRightBar from '../components/home_right.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('quotes.list').ready()) {
    const quotes = Collections.Quotes.find().fetch();
    onData(null, {quotes});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(HomeRightBar);
