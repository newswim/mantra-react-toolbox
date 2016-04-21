import { ProductHistory } from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('product_history.all', function () {
    const selector = {};
    const options = {
      fields: {_id: 1, name: 1, vendor: 1},
      sort: {createdAt: -1},
      limit: 10
    }

    return ProductHistory.find(selector, options);   // publish 10 most recent docs with matching id
  });

  Meteor.publish('product_history.single', function (productId) {
    check(productId, String);
    const selector = {_id: productId};
    return ProductHistory.find(selector);
  });
}
