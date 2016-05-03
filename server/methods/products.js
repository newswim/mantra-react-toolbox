import { Products } from '/lib/collections'
import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'

/* FIELDS

productName,
mfrName,
partNumber,
description,
productType,
vendorName,
vendorPartNumber,
perFoot,
listPrice,
purchasePrice,
laborUnit,
website,
dateLastEdited,
active
*/

export default function () {
  Meteor.methods({
    'product.create'(newProduct) {
      check(newProduct, Object)

      const {
        productName,
        mfrName,
        partNumber,
        description,
        productType,
        vendorName,
        vendorPartNumber,
        perFoot,
        listPrice,
        purchasePrice,
        laborUnit,
        website,
        dateLastEdited,
        active
      } = newProduct

      console.log(productName)

      check(productName, String)
      check(mfrName, String)
      check(partNumber, String)
      check(description, String)
      check(productType, String)
      check(vendorName, String)
      check(vendorPartNumber, String)
      check(perFoot, String)
      check(listPrice, String)
      check(purchasePrice, String)
      check(laborUnit, String)
      check(website, String)
      check(dateLastEdited, String)
      check(active, String)

      const createdAt = new Date()

      check(createdAt, Date)

      const product = {
        createdAt,
        productName,
        mfrName,
        partNumber,
        description,
        productType,
        vendorName,
        vendorPartNumber,
        perFoot,
        listPrice,
        purchasePrice,
        laborUnit,
        website,
        dateLastEdited,
        active
      }

      check(product, Object)

      const insertProduct = Products.insert(product)

      console.log(`Added ${productName} to Products`)

      return insertProduct
    },

    'product.delete'(id) {
      check(id, String)
      const deleteProduct = Products.remove({ "_id": id })

      console.log(`Removed product: ${id}`)
      return deleteProduct
    }
  })
}
