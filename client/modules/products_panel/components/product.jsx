import React from 'react';
import { ListItem } from 'react-toolbox/lib/list'

const Product = ({product}) => {
  return (
    <div>
      <ListItem
        caption={product.mfr_name}
        legend={product.name}
      />
    </div>
  )
}

export default Product;
