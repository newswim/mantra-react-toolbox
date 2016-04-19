import React from 'react';
import { ListItem } from 'react-toolbox/lib/list'
import {Button} from 'react-toolbox/lib/button'

const Product = ({product}) => {
    return (
      <div>
        <ListItem
          caption={product.name}
          legend={product.description}
        />
        <Button icon='delete' label='Delete' flat />
      </div>
    )
}

export default Product;
