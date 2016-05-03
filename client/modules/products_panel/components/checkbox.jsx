import React from 'react'
import FontIcon from 'react-toolbox/lib/font_icon'
import style from './product.scss'

const Checkbox = () => (
  <div className={style.checkBox}>
    {/* check to see if product is checked */}
    <FontIcon value='check' className={style.icon}/>
  </div>
);

export default Checkbox;
