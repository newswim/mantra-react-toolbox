import React from 'react'
import { IconMenu, MenuItem, MenuDivider } from 'react-toolbox/lib/menu'

class Menu extends React.Component {

  render() {
    return (
      <div>
        <IconMenu icon='more_vert' position='top-left' menuRipple>
            <MenuItem icon='border_all' caption='Quotes' onClick={this._goQuotes.bind(this)} />
            <MenuItem icon='store_mall_directory' caption='Products' onClick={this._goProducts.bind(this)} />
            <MenuItem icon='open_in_browser' caption='Export to PDF' />
            <MenuDivider />
            <MenuItem icon='settings_backup_restore' caption='Home' onClick={this._goHome.bind(this)} />
        </IconMenu>
      </div>
    )
  }

  _goProducts() {
    const { _goProducts } = this.props
    _goProducts()
  }

  _goHome() {
    const { _goHome } = this.props
    _goHome()
  }

  _goQuotes() {
    const { _goQuotes } = this.props
    _goQuotes()
  }

}

export default Menu
