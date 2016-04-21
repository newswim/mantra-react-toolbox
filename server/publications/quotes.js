import {Quotes} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('quotes.single', function (quotesId) {
    return Quotes.find(quotesId);
  });

  Meteor.publish('quotes.all', function (quotesId) {
    return Quotes.find({});
  });
}
