import React from 'react';
import style from './quote_topbar.scss'

const QuoteTopbar = ({
  quote = {
    opptyName: 'Still loading...',
    orgName: 'Still loading...',
    current: 'Still loading...',
    taxable: 'Still loading...',
    laborRate: 'Still loading...',
    projMgmtPct: 'Still loading...',
    defLength: 'Still loading...'

  }}) => {
  // console.log(quote)
  // const {opptyName} = quote
  return (
    <div className={style._quote_topbar}>
      <div><small>Quote Name:         </small><br /> {quote.opptyName}</div>
      <div><small>Organization:       </small><br /> {quote.orgName}</div>
      <div><small>Current Total:      </small><br /> {quote.current}</div>
      <div><small>Taxable:            </small><br /> {quote.taxable}</div>
      <div><small>Labor Rate:         </small><br /> {quote.laborRate}</div>
      <div><small>Project Management: </small><br /> {quote.projMgmtPct}</div>
      <div><small>Default Run Length: </small><br /> {quote.defLength}</div>
    </div>
  )
}

export default QuoteTopbar;
