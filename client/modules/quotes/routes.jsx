import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';

import { Quotes } from './components/quotes'

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
}
