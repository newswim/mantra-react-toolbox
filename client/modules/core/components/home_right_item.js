import React from 'react'
import style from './home_right_item.scss'
import { ListItem } from 'react-toolbox/lib/list'

// "List Item" --> Recent Quotes

const QuoteItem = ({ quote, id }) => (
  <ListItem
    className={style._single_quote_item}
    caption={quote.inputQuote}
    onClick={() => FlowRouter.go(`/quote/${id}`)}
  />
);

export default QuoteItem;
