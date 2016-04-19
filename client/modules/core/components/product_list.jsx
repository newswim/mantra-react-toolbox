import React from 'react';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
import Product from './product.jsx'

const ProductList = ({products}) => {
  return (

    <div>
      <List selectable ripple>
        <ListSubHeader caption='Explore products' />

        <div>

          {products.length === 0 ? <p>I didn't find any products!</p> : null}
          {products.map(product => (
            <Product key={product._id} product={product} />
          ))}

        </div>


        <ListSubHeader caption='Configuration' />
        <ListCheckbox checked caption='A checkbox' legend='You will receive a notification when a new product is published' />
        <ListDivider />
        <ListItem caption='Add another product' leftIcon='send' />
        <ListItem caption='Remove product' leftIcon='delete' />
      </List>
    </div>


  )

};

export default ProductList;
