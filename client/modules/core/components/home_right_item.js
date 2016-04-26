import React from 'react'
import { ListItem } from 'react-toolbox/lib/list'

const QuoteItem = ({quote }) => (
  <ListItem
    caption={quote.inputQuote}
  />
);

export default QuoteItem;
