import React from 'react'
import ListWrapper from '/client/modules/products_panel/components/list_wrapper'
import style from './quotes.scss'

const QuoteView = ({quoteId}) => (
  <div className={style.quoteLayoutWrap}>
    <h1>IM QUOTE: {quoteId}</h1>
    <ListWrapper />
  </div>
)

export default QuoteView
