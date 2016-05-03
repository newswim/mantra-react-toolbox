import React from 'react'
import { BaseComponent } from '/client/modules/react_utils'
import Product from './product.jsx'
import Checkbox from './checkbox.jsx'
import AddButton from './add_button.jsx'
import styles from './product.scss'

class ProductList extends BaseComponent {
  constructor(props) {
    super(props)
    this.bindHandlers('handleDelete', 'handleInfo')
  }

  handleDelete(id) {
    const { _execute_delete } = this.props
    // const { products } = this.props
    // console.log(_execute_delete)
    // console.log(products)
    _execute_delete(id)
  }

  // TODO: Show an overlay with details on the current product
  handleInfo(id) {
    console.log(id)
  }

  render() {
    const { products } = this.props

    return (
      <div>
          {products.length === 0 ? <p>I didn't find any products!</p> : null}
          {products.map(product => (
            <div key={product._id} onClick={() => console.log(`you clicked ${product._id}`)} className={styles.card_wrapper}>
              <div className={styles.item_wrapper}>
                <AddButton />
                <Checkbox />
                <Product product={product} className={styles.blueBg}/>
                <div className={styles.product_info} onClick={() => this.handleDelete(product._id)}>Delete</div>
                <div className={styles.product_info}>Info</div>
              </div>
            </div>
          ))}
      </div>
    )
  }

}

export default ProductList


/*

NOTE:

calling a function w/ onClick directly will execute that function every time
the component renders. To prevent this, pass a function to the handler.

for reference: http://stackoverflow.com/questions/33846682/react-onclick-fuction-fires-on-render


*/
