```js
import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import QuoteLayout from '../components/quote_layout.jsx';

export const composer = ({
  Meteor,
  Collections,
  LocalState
}, onData) => {

  onData(null, {});
};

export const depsMapper = (context, actions) => {
  const {Meteor, Collections, LocalState} = context();

  return {
    Meteor,
    Collections,
    LocalState
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(QuoteLayout);

```
