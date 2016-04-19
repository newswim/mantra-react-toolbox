import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx'
import AltLayout from '/client/modules/core/containers/alt_layout.js'
import Home from './components/home.jsx'
import ProductList from './containers/product_list.js'
import { Quotes } from './components/quotes.jsx'

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  const AltLayoutCtx = injectDeps(AltLayout);


  FlowRouter.route('/', {
    name: 'main',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });

  FlowRouter.route('/products', {
    name: 'products',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<ProductList />)
      });
    }
  });

  FlowRouter.route('/quotes', {
    name: 'quotes',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Quotes />)
      });
    }
  });

  FlowRouter.route('/alt', {
    name: 'alt',
    action() {
      mount(AltLayoutCtx, {
        content: () => (<Quotes />)
      });
    }
  });
}
