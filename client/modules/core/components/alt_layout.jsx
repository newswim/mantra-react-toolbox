import React from 'react'
import { ReactiveVar } from 'meteor/reactive-var'
import { AppBar, Checkbox, IconButton } from 'react-toolbox'
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox'
import { BaseComponent } from '/client/modules/react_utils'
import Helmet from 'react-helmet'
import { Grid } from 'react-virtualized'
import InputTest from './stateful_input.jsx'


// Grid data as an array of arrays
const list = [
  ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125 /* ... */ ],
  ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125 /* ... */ ],
  ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125 /* ... */ ],
  ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125 /* ... */ ],
  ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125 /* ... */ ],
  ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125 /* ... */ ],
  ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125 /* ... */ ],
  ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125 /* ... */ ],
  ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125 /* ... */ ],
  ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125 /* ... */ ],
  ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125 /* ... */ ],
  ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125 /* ... */ ],
  ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125 /* ... */ ]
  // And so on...
];

let drawerActive  = new ReactiveVar(false)
let drawerPinned  = new ReactiveVar(false)
let sidebarPinned = new ReactiveVar(false)

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
    return (
      <section>
        <Helmet
            link={[
                {"rel": "stylesheet", "href": "https://fonts.googleapis.com/icon?family=Material+Icons"},
                {"rel": "stylesheet", "href": "/styles/styles.css"}
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
                        {/* Stateful Input */}
                        <InputTest />
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
        <Grid
           width={600}
           height={300}
           columnWidth={100}
           rowHeight={30}
           columnsCount={list.length}
           rowsCount={list.length}
           renderCell={({ columnIndex, rowIndex }) => list[rowIndex][columnIndex]}
         />
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
