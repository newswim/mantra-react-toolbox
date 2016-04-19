import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx'

import InputLogin from './containers/input_login.js'

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/login', {
    name: 'login',
    action() {
      mount(MainLayoutCtx, {
        content: () => (< InputLogin />)
      });
    }
  });
}
