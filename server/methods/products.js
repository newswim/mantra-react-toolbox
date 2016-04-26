import { Products } from '/lib/collections';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default function () {
  Meteor.methods({
    'product.create'(name, vendor) {
      const createdAt = new Date()

      const product = {name, vendor, createdAt};
      check(name, String)
      check(vendor, String)

      const insertProduct = Products.insert(product);

      console.log(`Added ${name} to Products`)

      return insertProduct
    },

    'product.delete'(id) {
      check(id, String)
      const deleteProduct = Products.remove({ "_id": id });

      console.log(`Removed product: ${id}`)
      return deleteProduct
    }
  })
}
