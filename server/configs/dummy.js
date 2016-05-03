import Products from '/lib/collections/products'
import ProductHistory from '/lib/collections/product_history'

// export default function () {
if (!Products.findOne()) {

/* SCHEMA
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
*/
  const product_table = [
    { manufacturerName: 'Bora Gear', name: 'KON-101',description: '1U Rack Cooling Fan', purchasePrice: 119.00 },
    { manufacturerName: 'BoraGear', name: 'EGB',description: 'Egor Tabs', purchasePrice: 0.40 },
    { manufacturerName: 'Channel Vision ', name: 'HS-16',description: '16-Way Splitter/Combiner', purchasePrice: 35.87 },
    { manufacturerName: 'Channel Vision ', name: 'CVT-40BID',description: '5-1000mhz RF Amplifier 40DB Gain', purchasePrice: 172.80 },
    { manufacturerName: 'Control4', name: 'C4-HC800-BL',description: 'Master Dual Core 1.8GHz Processor Controller', purchasePrice: 900.00 },
    { manufacturerName: 'Control4', name: 'C4-1UREK-B',description: 'HC-800 Rack Ear Kit', purchasePrice: 23.40 },
    { manufacturerName: 'Control4', name: 'C4-IOX-E-B',description: 'IO Extender', purchasePrice: 300.005 },
    { manufacturerName: 'Control4', name: 'C4-CBLIR-BULK',description: 'Single IR Flasher', purchasePrice: 4.00 },
    { manufacturerName: 'Video Storm', name: 'CMX3838A2',description: 'Audio Matrix Switch', purchasePrice: 750.00 },
    { manufacturerName: 'Video Storm', name: 'NAB100',description: 'Network Card', purchasePrice: 399.00 },
    { manufacturerName: 'Video Storm', name: 'CRM ',description: 'CRM Audio Matrix Rack Mount Ears', purchasePrice: 23.00 }
  ]

  product_table.map((product) => {
    let doc = {
      mfrName: product.manufacturerName,
      productName: product.name,
      description: product.description,
      purchasePrice: product.purchasePrice,
      partNumber:       "Dummy field",
      productType:      "Dummy field",
      vendorName:       "Dummy field",
      vendorPartNumber: "Dummy field",
      perFoot:          "Dummy field",
      listPrice:        "Dummy field",
      laborUnit:        "Dummy field",
      website:          "Dummy field",
      dateLastEdited:   "Dummy field",
      active:           "Dummy field",
    }
    Products.insert(doc)
  })
}

if (!ProductHistory.findOne()) {
  for (let lc = 1; lc <= 5; lc++) {
    const name = `product_history_name: ${lc}`
    const vendor = `${lc}'s vendor`
    ProductHistory.insert({name, vendor})
  }
}
