import React from 'react';
import { ListItem } from 'react-toolbox/lib/list'

const Product = ({product}) => {
    return (
      <ListItem key={product._id}
        caption={product.name}
        legend={product.description}

        />
    )
}

export default Product;
