import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx'
import ProductList from '/client/modules/products_panel/containers/product_list'
import ListWrapper from '/client/modules/products_panel/components/list_wrapper'
import NewProduct from './containers/new_product'

// route for updating / adding product information

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/new', {
    name: 'new.product',
    action() {
      mount(MainLayoutCtx, {
        content: () => (
          <div>
            <NewProduct />
            <ListWrapper />
          </div>
        )
      });
    }
  });
}
