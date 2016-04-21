import React from 'react';

// This will be a smart form for adding new products into the database
// and possibly reused for updating products
// probably done by auto-filling the inputs with currently selected product

// user click product -> find that product in Products db (CURRENT_PRODUCT_ID) -> update CURRENT_PRODUCT

const NewProduct = ({ status /*data from composer OR parent component (either)*/ }) => (
  <div>
    <h5>{status.prod_hist_status}</h5>
    <h5>{status.update_error}</h5>
    <h5>{status.new_price}</h5>
  </div>
)

export default NewProduct;
