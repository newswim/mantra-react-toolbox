import {ProductHistory} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

// We can either keep all of the data on the singular object
// and since we're inserting here, it seems logical to
// store as much data onto the product as possible, that way
// we can use the reference in the future to look up other values
// at a similar time.

export default function () {
  Meteor.methods({
    'product_history.addNewRecord'(
      id,
      name,
      mfr_name,
      part_num,
      description,
      product_type,
      vendor_name,
      vendor_part_number,
      per_foot, // bool
      list_price,
      purchase_price,
      labor_unit,
      website,
      date_last_edited,
      active //bool
    ) {

      const currentDate = new Date()
      const propsToInsert = {

        id,       // keeping the id for ref (result of asking ID of current product)
        name,
        mfr_name,
        part_num,
        description,
        product_type,
        vendor_name,
        vendor_part_number,
        per_foot, // bool
        list_price,
        purchase_price,
        labor_unit,
        website,
        date_last_edited,
        active,   //bool
        currentDate
      }

      check(name, String)
      check(mfr_name, String)
      check(part_num, Number)
      check(description, String)
      check(product_type, String)
      check(vendor_name, String)
      check(vendor_part_number, String)
      check(per_foot, Boolean)
      check(list_price, Number)
      check(purchase_price, Number)
      check(labor_unit, Number)
      check(website, String)
      check(date_last_edited, String)
      check(active, Boolean)

      const insertingProduct = ProductHistory.insert(propsToInsert)

      return insertingProduct
    }
  });
}
