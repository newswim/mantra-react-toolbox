import Products from '/lib/collections/products';
// import {ProductHistory} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('products.list', function () {
    const selector = {};
    const options = {
      fields: {_id: 1, mfr_name: 1, name: 1,  description: 1,  purchase_price: 1},
      sort: {createdAt: -1},
      // limit: 10
    };

    return Products.find(selector, options);
  });

  Meteor.publish('products.single', function (productId) {
    check(productId, String);
    const selector = {_id: productId};
    return Products.find(selector);
  });

  // Meteor.publish('products.history', function (productId) {
  //   check(productId, String);
  //   const selector = {productId};
  //   return ProductHistory.find(selector);
  // });
}
