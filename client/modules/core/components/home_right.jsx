import React from 'react'
import { BaseComponent } from '/client/modules/react_utils'
import styles from './home_right.m.styl'

import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';

const ListTest = () => (
  <List selectable ripple>
    <ListSubHeader caption='Recent' />
    <ListDivider />
    <ListItem
      caption='Topgolf whatever'
    />
    <ListItem
      caption='Topgolf whatever'
    />
    <ListItem
      caption='Topgolf whatever'
    />
    <ListSubHeader caption='Templates' />
    <ListDivider />

  </List>
);

class HomeRightBar extends BaseComponent {
  render() {
    const { error } = this.props;

    return (
      <div className={styles.rightWrapper}>
          <ListTest />
      </div>
    );
  }
}

export default HomeRightBar
