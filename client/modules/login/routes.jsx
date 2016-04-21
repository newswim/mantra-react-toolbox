import React from 'react'
import { mount } from 'react-mounter'

import MainLayout from './components/layout.jsx'

import InputLogin from './containers/input_login.js'

import CreateUser from './containers/create_user.js'

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout)

  FlowRouter.route('/create', {
    name: 'users.create',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<CreateUser />)
      });
    }
  })

  FlowRouter.route('/login', {
    name: 'users.login',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<InputLogin />)
      });
    }
  })

  FlowRouter.route('/logout', {
    name: 'users.logout',
    action() {
      Meteor.logout()
      FlowRouter.go('/')
    }
  })
}
