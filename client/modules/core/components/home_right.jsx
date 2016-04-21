import React from 'react'
import { BaseComponent } from '/client/modules/react_utils'
import styles from './home_right.scss'

import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';

const ListTest = () => (
  <List selectable ripple>
    <ListSubHeader caption='Recent Quotes' />
    <ListDivider />
    <ListItem
      caption='Topgolf Ameretto'
    />
    <ListItem
      caption='Topgolf Justin Landrover'
    />
    <ListItem
      caption='Topgolf Quincy'
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
