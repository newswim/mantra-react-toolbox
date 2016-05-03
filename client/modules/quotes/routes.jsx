import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';

import Quotes from './containers/quotes'
import QuoteView from './components/quote_view'

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

    FlowRouter.route('/quotes', {
      name: 'quotes',
      action() {
        mount(MainLayoutCtx, {
          content: () => (<Quotes />)
        });
      }
    });

    FlowRouter.route('/quote/:quoteId', {
      name: 'quote.single',
      action(params) {
        // pass the Quote ID into the route
        const quoteId = params.quoteId
        mount(MainLayoutCtx, {
          content: () => (<QuoteView quoteId={quoteId} />)
        });
      }
    });
}
