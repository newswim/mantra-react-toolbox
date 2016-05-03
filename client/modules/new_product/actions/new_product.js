export default {

  // newStateOfProduct @object | contains all of the required fields
  // call 'product_history.addNewRecord' method on newStateOfProduct
  // actions don't need to return anything

  // We need to decide if updating and creating are different enough that
  // they need to be separated

  addNewProduct({Meteor, LocalState, Collections}, newProduct) {


    // Call Meteor method insert new product
    // like Meteor.call('products.add', newProduct)

    // initiate state
    // we'll pass newState to the composer and do a diff there
    // const currState = Collections.findOne({"_id" = id}) vs. newState
    if (!LocalState.get('CURRENT_PRODUCT_ID')) {
      LocalState.set('UPDATE_PRODUCT_ERROR', 'need an id!')
    } else {
      // LocalState.set('UPDATE_PRODUCT_ERROR', null)
      try { LocalState.set('CURRENT_PRODUCT_ID', id) }
      catch (error) { throw error }

      return LocalState.set('CURRENT_PRODUCT_ID', id)
    }

    try {
      check(newProduct, Object)
      Meteor.call('product.create', newProduct)
    }
    catch (error) {console.log(error.message)}


    // pretty sure that LocalState will not perform set call if there's
    // no update to be made

    // .ready()           is a reactive data source
    // .subscriptionId()  can be used to reference certain subscriptions [reactive array-like structures]

  },

  // NewStateToUpdate | @object
  // oldState         | @object
  // both of these are sent from composer

  actuallyReallyUpdate({Meteor, Collections, LocalState}, NewStateToUpdate, oldState) {

    const id = oldState.id

    // const id = LocalState.get('CURRENT_PRODUCT_ID')

    LocalState.set('NEW_PRODUCT_PRICE', `ADDING PRODUCT ${newStateOfProduct}`)

      // update new product price (add to ProductHistory as well as update this doc's .price)

      // Methods --> update current price --> push to ProductHistory

    try {
      Meteor.call('product_history.addNewRecord', NewStateToUpdate, id)
    }
    catch (error) {
      console.log(error.message)
    }

  },

  resetNewProductPrice({LocalState}) {

    LocalState.set('NEW_PRODUCT_PRICE', null)

  },

  clearErrors({LocalState}) {

  }
}
