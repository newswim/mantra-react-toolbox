import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
import QuoteLayout from './containers/quote_layout.js'

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/quote/:quoteId', {
    name: 'quote.single',
    action(params) {
      // pass the Quote ID into the route
      const quoteId = params.quoteId
      mount(MainLayoutCtx, {
        content: () => (<QuoteLayout quoteId={quoteId} />)
      });
    }
  });
}
