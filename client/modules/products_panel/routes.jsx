import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
import ListWrapper from './components/list_wrapper'

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout)

  FlowRouter.route('/products', {
    name: 'products',
    action() {
      mount(MainLayoutCtx, {
        content: () => (
          <div>
            <a href="/new"><h3>add a product</h3></a><br />
            <ListWrapper />
          </div>
        )
      });
    }
  })
}
