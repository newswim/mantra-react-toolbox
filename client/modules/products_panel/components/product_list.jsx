import React from 'react'
import { List, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list'
import { BaseComponent } from '/client/modules/react_utils'
import {Button} from 'react-toolbox/lib/button'
import Product from './product.jsx'
import styles from './product.mss'

class ProductList extends BaseComponent {
  constructor(props) {
    super(props)
    this.bindHandlers('handleDelete')
  }

  handleDelete (id) {
    const { _execute_delete } = this.props
    const { products } = this.props
    // console.log(_execute_delete)
    // console.log(products);
    _execute_delete(id)
  }

  render() {
    const { products } = this.props

    return (
      <div className={styles.productWrap}>
          {products.length === 0 ? <p>I didn't find any products!</p> : null}
          {products.map(product => (
            <div key={product._id}>
              <Product product={product} />
              <button onClick={() => this.handleDelete(product._id)}>Delete</button>
            </div>
          ))}
      </div>
    )
  }

}

export default ProductList;


/*

NOTE:

calling a function w/ onClick directly will execute that function every time
the component renders. To prevent this, pass a function to the handler.

for reference: http://stackoverflow.com/questions/33846682/react-onclick-fuction-fires-on-render


*/
