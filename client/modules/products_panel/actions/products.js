export default {
  execute_delete({Meteor, Collections, LocalState}, id) {
    try {
      Meteor.call('product.delete', id)
      LocalState.set('PRODUCT_BEING_DELETED', `deleting: ${id}`)
    } catch (error) {
      console.log(error.message)
    }
  },
  // @selectedProducts  Array   | all the currently selected products
  // @id                String  | id of a newly selected product
  handle_check({LocalState}, id, selectedProducts) {
    selectedProducts.push(id)
    LocalState.set('SELECTED_PRODUCTS', `added: ${id}`)
  }
}
