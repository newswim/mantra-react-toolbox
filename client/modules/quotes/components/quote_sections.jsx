import React from 'react'
import style from './quote_sections.scss'

const QuoteSections = () => (
  <div className={style._quote_section_wrapper}>
    <div className={style._quote_section_header}>
      <h3>Sections</h3>
    </div>
    <div className={style._quote_section_button}>
      <span>Standard Bays*</span>
    </div>
    <div className={style._quote_section_button}>
      <span>Lobby</span>
    </div>

  </div>
)

export default QuoteSections
