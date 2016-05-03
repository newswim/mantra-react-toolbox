import React from 'react'
import { ListItem } from 'react-toolbox/lib/list'
import style from './product.scss'

// Only publishing these fields in 'products.list'

const Product = ({product}) => {
  return (
    <div>
      <ListItem
        caption={product.productName}
        legend={product.mfrName}
        className={style.product_detail}
      />
    </div>
  )
}

export default Product
