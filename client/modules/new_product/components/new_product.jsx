import React from 'react';
import { BaseComponent } from '/client/modules/react_utils'

// This will be a smart form for adding new products into the database
// and possibly reused for updating products
// probably done by auto-filling the inputs with currently selected product

// user click product -> find that product in Products db (CURRENT_PRODUCT_ID) -> update CURRENT_PRODUCT

class NewProduct extends BaseComponent {
  constructor() {
    super()
    this.bindHandlers('handleSubmit')
  }
  render() {
    const { error, status } = this.props;

    return (
      <div>
        <div>
          <h5>{status.prod_hist_status}</h5>
          <h5>{status.update_error}</h5>
          <h5>{status.new_price}</h5>
        </div>
        <form>
          <input ref="name" type="text" placeholder="Name"></input>
          <input ref="vendor" type="text" placeholder="Vendor"></input>
          <button onClick={this.handleSubmit}>Add Product</button>
        </form>
      </div>
    );
  }

  handleSubmit(event) {

    if (event && event.preventDefault) {
      event.preventDefault();
    }

    const name = this.refs.name.value
    const vendor = this.refs.vendor.value

    const { execute_add_product } = this.props

    const newProduct = { name, vendor}

    execute_add_product(newProduct)

    this.refs.name.value = ''
    this.refs.vendor.value = ''
  }
}

export default NewProduct;
