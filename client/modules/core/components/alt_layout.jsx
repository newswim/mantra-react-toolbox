import React from 'react'
import { ReactiveVar } from 'meteor/reactive-var'
import { AppBar, Checkbox, IconButton } from 'react-toolbox'
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox'
import { BaseComponent } from '/client/modules/react_utils'
import Helmet from 'react-helmet'

import context from '/client/configs/context.js'

let drawerActive  = new ReactiveVar(false)
let drawerPinned  = new ReactiveVar(false)
let sidebarPinned = new ReactiveVar(false)

// const getDrawer = new Tracker.autorun(function () {
//   drawerActive.get()
// })


class AltLayout extends BaseComponent {
  constructor () {

    super()


    this.bindHandlers(
      'toggleDrawerActive',
      'toggleDrawerPinned',
      'toggleSidebar'
    )
  }

  render() {

    const { LocalState } = context()

    return (
      <section>
        <Helmet
            link={[
                {"rel": "stylesheet", "href": "https://fonts.googleapis.com/icon?family=Material+Icons"}
            ]}
        />
        <Layout>
            <NavDrawer active={ drawerActive.get() }
                pinned={ drawerPinned.get() }
                permanentAt='xxxl'
                onOverlayClick={ this.toggleDrawerActive }>
                <p>
                    Navigation, account switcher, etc. go here.
                </p>
            </NavDrawer>
            <Panel>
                <AppBar><IconButton icon='menu' inverse={ true } onClick={ this.toggleDrawerActive }/></AppBar>
                <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
                    <h1>Main Content</h1>
                      <div>
                        <p>CONTENT</p>
                      </div>
                    <Checkbox label='Pin drawer' checked={drawerPinned.get()} onChange={this.toggleDrawerPinned} />
                    <Checkbox label='Show sidebar' checked={sidebarPinned.get()} onChange={this.toggleSidebar} />
                </div>
            </Panel>
            <Sidebar pinned={ sidebarPinned.get("sidebarPinned") } width={ 5 }>
                <div><IconButton icon='close' onClick={ this.toggleSidebar }/></div>
                <div style={{ flex: 1 }}>
                    <p>Supplemental content goes here.</p>
                </div>
            </Sidebar>
        </Layout>

      </section>
    );
  }

  toggleDrawerActive() {

//       console.log(drawerActive)

      const { toggleDrawer } = this.props
      console.log(`pressed toggleDrawerActive + ${drawerActive.get()}`)
      console.log(drawerActive.get())
      drawerActive.set( !drawerActive.get() )

      // toggleDrawer()

  }

  toggleDrawerPinned() {
      console.log(drawerPinned.get())
      drawerPinned.set( !drawerPinned.get() )
  }

  toggleSidebar() {
    console.log(sidebarPinned.get())
      sidebarPinned.set( !sidebarPinned.get() )
  }
}

export default AltLayout
