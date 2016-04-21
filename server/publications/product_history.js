import {ProductHistory} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('product_history', function (product_historyId) {
         check(product_historyId, String)


      return ProductHistory.find({ "_id" : product_historyId});   // return Array of all products matching id
  });
}
