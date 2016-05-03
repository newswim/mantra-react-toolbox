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
          {/* should comply with collection schema | might be deconstructing too much */}
          <input ref = "productName"      type = "text" placeholder = "Product Name"></input>
          <input ref = "mfrName"          type = "text" placeholder = "Manufacturer Name"></input>
          <input ref = "partNumber"       type = "text" placeholder = "Part Number"></input>
          <input ref = "description"      type = "text" placeholder = "Description"></input>
          <input ref = "productType"      type = "text" placeholder = "Product Type"></input>
          <input ref = "vendorName"       type = "text" placeholder = "Vendor Name"></input>
          <input ref = "vendorPartNumber" type = "text" placeholder = "Vendor Part Number"></input>
          <input ref = "perFoot"          type = "text" placeholder = "Cost Per Foot"></input>
          <input ref = "listPrice"        type = "text" placeholder = "List Price"></input>
          <input ref = "purchasePrice"    type = "text" placeholder = "Purchase Price"></input>
          <input ref = "laborUnit"        type = "text" placeholder = "Labor Unit"></input>
          <input ref = "website"          type = "text" placeholder = "Website"></input>
          <input ref = "dateLastEdited"   type = "text" placeholder = "Date Last Edited"></input>
          <input ref = "active"           type = "text" placeholder = "Active? (yes/no)"></input>
          <input type="reset"></input>
          <button onClick={this.handleSubmit}>Add Product</button>
        </form>
      </div>
    );
  }

  handleSubmit(event) {

    if (event && event.preventDefault) {
      event.preventDefault();
    }

    const productName      = this.refs.productName.value
    const mfrName          = this.refs.mfrName.value
    const partNumber       = this.refs.partNumber.value
    const description      = this.refs.description.value
    const productType      = this.refs.productType.value
    const vendorName       = this.refs.vendorName.value
    const vendorPartNumber = this.refs.vendorPartNumber.value
    const perFoot          = this.refs.perFoot.value
    const listPrice        = this.refs.listPrice.value
    const purchasePrice    = this.refs.purchasePrice.value
    const laborUnit        = this.refs.laborUnit.value
    const website          = this.refs.website.value
    const dateLastEdited   = this.refs.dateLastEdited.value
    const active           = this.refs.active.value
    const newProduct = {
      productName,
      mfrName,
      partNumber,
      description,
      productType,
      vendorName,
      vendorPartNumber,
      perFoot,
      listPrice,
      purchasePrice,
      laborUnit,
      website,
      dateLastEdited,
      active,
    }

    console.log(newProduct)

    const { execute_add_product } = this.props

    execute_add_product(newProduct)

    // this.refs.productName.value = ''
    // this.refs.mfrName.value = ''
    // this.refs.partNumber.value = ''
    // this.refs.description.value = ''
    // this.refs.productType.value = ''
    // this.refs.vendorName.value = ''
    // this.refs.vendorPartNumber.value = ''
    // this.refs.perFoot.value = ''
    // this.refs.listPrice.value = ''
    // this.refs.purchasePrice.value = ''
    // this.refs.laborUnit.value = ''
    // this.refs.website.value = ''
    // this.refs.dateLastEdited.value = ''
    // this.refs.active.value = ''
  }
}

export default NewProduct;
