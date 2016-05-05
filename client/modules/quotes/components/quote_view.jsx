import React from 'react'
import ListWrapper from '/client/modules/products_panel/components/list_wrapper'
import { BaseComponent } from '/client/modules/react_utils'
import QuoteTopbar from '../containers/quote_topbar'
import QuoteTable from '../containers/quote_table'
import style from './quotes.scss'

import { AppBar, Checkbox, IconButton, Button } from 'react-toolbox'
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox'

class QuoteView extends BaseComponent {

  constructor(props) {
    super(props)
    this.state = {
        drawerActive: false,
        drawerPinned: false,
        sidebarPinned: true
    }
    this.bindHandlers('toggleDrawerActive', 'toggleDrawerPinned', 'toggleSidebar')
    // const { quoteId } = this.props
  }

    toggleDrawerActive () {
        this.setState({ drawerActive: !this.state.drawerActive })
    }

    toggleDrawerPinned () {
        this.setState({ drawerPinned: !this.state.drawerPinned })
    }

    toggleSidebar () {
        this.setState({ sidebarPinned: !this.state.sidebarPinned })
    }

    render() {
        const { quoteId } = this.props
        return (
            <Layout>
                <NavDrawer
                    active={this.state.drawerActive}
                    pinned={this.state.drawerPinned}
                    permanentAt='xxxl'
                    onOverlayClick={ this.toggleDrawerActive }
                    width='wide'>
                    <p>
                        ADD SECTIONS
                    </p>
                </NavDrawer>
                <Panel>
                    <AppBar>
                      <IconButton icon='menu' inverse={ false } onClick={ this.toggleDrawerActive }/>
                      <QuoteTopbar />
                      <div className={style._add_button}>
                        <Button icon='add' onClick={ this.toggleSidebar } primary={true} floating />
                      </div>
                    </AppBar>
                    <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
                        <h1>Main Content</h1>
                        <h3>IM QUOTE: {quoteId}</h3>
                        <Checkbox label='Pin drawer' checked={this.state.drawerPinned} onChange={this.toggleDrawerPinned} />
                        <Checkbox label='Add a product' checked={this.state.sidebarPinned} onChange={this.toggleSidebar} />
                        {/* Render table */}
                        <QuoteTable />
                        
                    </div>
                </Panel>
                <Sidebar pinned={ this.state.sidebarPinned } width={ 7 } scrollY={ true }>
                    <div><IconButton icon='close' onClick={ this.toggleSidebar }/></div>
                    <div style={{ flex: 1 }}>
                        <ListWrapper />
                    </div>
                </Sidebar>
            </Layout>
        )
    }
}

// const QuoteView = ({quoteId}) => (
//   <div className={style.quoteLayoutWrap}>
//     <div className={style._topbar_wrapper}>
//       <QuoteTopbar />
//     </div>
//     <div className={style._quote_table_wrapper}>
//       <h3>IM QUOTE: {quoteId}</h3>
//     </div>
//     <ListWrapper />
//   </div>
// )

export default QuoteView
