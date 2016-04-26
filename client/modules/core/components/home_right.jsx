import React from 'react'
import { BaseComponent } from '/client/modules/react_utils'
import QuoteItem from './home_right_item'
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list'
import styles from './home_right.scss'


class HomeRightBar extends BaseComponent {
  render() {
    const { quotes } = this.props
    return (
      <div className={styles.rightWrapper}>
        <List selectable ripple>
          <ListSubHeader caption='Recent Quotes' />
          <ListDivider />
          {
            quotes.map(quote => (
              <QuoteItem
                key={quote._id}
                quote={quote.newQuote}
              />
            ))
          }

          <ListSubHeader caption='Templates' />
          <ListDivider />

        </List>
      </div>
    );
  }
}

export default HomeRightBar
