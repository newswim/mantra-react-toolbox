import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx'
import NewProduct from './containers/new_product'

// route for updating / adding product information

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/new', {
    name: 'new.product',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewProduct />)
      });
    }
  });
}
