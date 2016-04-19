import React from 'react'
import { List, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list'
import {Button} from 'react-toolbox/lib/button'
import styles from './product.mss'
import Product from './product.jsx'


const ProductList = ({products}) => {
  return (
    <div className={styles.productWrap}>
    {products.length === 0 ? <p>I didn't find any products!</p> : null}
    {products.map(product => (
      <Product key={product._id} product={product} />
    ))}
    </div>
  )
};

export default ProductList;
