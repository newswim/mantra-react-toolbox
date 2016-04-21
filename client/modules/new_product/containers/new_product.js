import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import NewProduct from '../components/new_product.jsx';

export const composer = ({context}, onData) => {

  const {Meteor, Collections, LocalState} = context();
  let prod_hist_status = LocalState.get('GET_PRODUCT_HISTORY_STATUS')
  let update_error = LocalState.get('UPDATE_PRODUCT_ERROR')
  let new_price = LocalState.get('NEW_PRODUCT_PRICE')
  let curr_id = LocalState.get('CURRENT_PRODUCT_ID')

  let status = {
    prod_hist_status,
    update_error,
    new_price
  }
  
  if (Meteor.subscribe('product_history').ready()) {
    LocalState.set('GET_PRODUCT_HISTORY_STATUS', 'product retrieved')

    const current_product = Collections.ProductHistory.find({_id: curr_id})

  } else {

    LocalState.set('GET_PRODUCT_HISTORY_STATUS', 'ready to be updated' )

  }

  onData(null, { current_product, status });
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  execute_add_product: actions.new_product.addNewProduct,
  execute_update_product: actions.new_product.actuallyReallyUpdate,
  execute_reset_product: actions.new_product.resetNewProductPrice

});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NewProduct);
