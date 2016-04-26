import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx'
import AltLayout from '/client/modules/core/containers/alt_layout.js'
import Home from './containers/home'

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  const AltLayoutCtx = injectDeps(AltLayout);

  FlowRouter.route('/', {
    name: 'main',
    action() {
      if (!Meteor.userId()) {
          FlowRouter.go('/login');
      }
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  })

  FlowRouter.route('/alt', {
    name: 'alt',
    action() {
      mount(AltLayoutCtx, {
        content: () => (<ProductList />)
      });
    }
  })

}
