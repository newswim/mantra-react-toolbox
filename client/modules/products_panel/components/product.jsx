import React from 'react'
import { ListItem } from 'react-toolbox/lib/list'
import style from './product.scss'

const Product = ({product}) => {
  return (
    <div>
      <ListItem
        caption={product.name}
        legend={product.mfr_name}
        className={style.product_detail}
      />
    </div>
  )
}

export default Product
