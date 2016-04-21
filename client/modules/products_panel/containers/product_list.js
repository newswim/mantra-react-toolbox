import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ProductList from '../components/product_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  if (Meteor.subscribe('products.list').ready()) {
    const products = Collections.Products.find().fetch();
    onData(null, {products});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  _execute_delete: actions.products.execute_delete
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProductList);
