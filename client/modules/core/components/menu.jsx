import React from 'react'
import { IconMenu, MenuItem, MenuDivider } from 'react-toolbox/lib/menu'
import Avatar from 'react-toolbox/lib/avatar'
import styles from './main_layout.scss'

class Menu extends React.Component {
  constructor() {
    super()
  }
  render() {
    const { userName } = this.props
    return (
      <div className={styles.userMenu}>
        <span style={{marginLeft: 'auto', marginRight: 'auto'}}>
          <h1><a href="/" style={{color: "#0A477C"}}>⟑<small>rrow</small></a></h1>
        </span>
        <span>{userName}</span>
        <Avatar title={Meteor.userId()} image="https://placeimg.com/80/80/animals"/>
        <IconMenu icon='arrow_drop_down' position='top-right' menuRipple>
            <MenuItem icon='border_all' caption='Quotes' onClick={this._goQuotes.bind(this)} />
            <MenuItem icon='store_mall_directory' caption='Products' onClick={this._goProducts.bind(this)} />
            <MenuItem icon='open_in_browser' caption='Logout' onClick={this._handleLogout.bind(this)} />
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

  _handleLogout() {
    const { _handleLogout } = this.props
    _handleLogout()
  }

}

export default Menu
