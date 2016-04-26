import {Quotes} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('quotes.list', function () {
    const selector = {};
    const options = {
      // fields: {_id: 1, 'newQuote.inputQuote': 1},
      sort: {createdAt: -1},
      // limit: 10
    };

    return Quotes.find(selector, options);
  });

  Meteor.publish('quotes.all', function (quotesId) {
    return Quotes.find({});
  });
}
