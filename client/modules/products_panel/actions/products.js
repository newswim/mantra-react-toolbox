export default {
  execute_delete({Meteor, Collections, LocalState}, id) {
    try {
      Meteor.call('product.delete', id)
      LocalState.set('PRODUCT_BEING_DELETED', `deleting: ${id}`)
    }
    catch (error) {
      console.log(error.message)
    }

    // return console.log("called execute_delete")

  }
}
