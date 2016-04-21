import Products from '/lib/collections/products'
import ProductHistory from '/lib/collections/product_history'

//export default function () {
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
    {mfr_name:"Bora Gear",name:"KON-101",description:"1U Rack Cooling Fan",purchase_price: 119.00},
    {mfr_name:"BoraGear",name:"EGB",description:"Egor Tabs",purchase_price: 0.40},
    {mfr_name:"Channel Vision ",name:"HS-16",description:"16-Way Splitter/Combiner",purchase_price: 35.87},
    {mfr_name:"Channel Vision ",name:"CVT-40BID",description:"5-1000mhz RF Amplifier 40DB Gain",purchase_price: 172.80},
    {mfr_name:"Control4",name:"C4-HC800-BL",description:"Master Dual Core 1.8GHz Processor Controller",purchase_price: 900.00},
    {mfr_name:"Control4",name:"C4-1UREK-B",description:"HC-800 Rack Ear Kit",purchase_price: 23.40},
    {mfr_name:"Control4",name:"C4-IOX-E-B",description:"IO Extender",purchase_price: 300.005},
    {mfr_name:"Control4",name:"C4-CBLIR-BULK",description:"Single IR Flasher",purchase_price: 4.00},
    {mfr_name:"Video Storm",name:"CMX3838A2",description:"Audio Matrix Switch",purchase_price: 750.00},
    {mfr_name:"Video Storm",name:"NAB100",description:"Network Card",purchase_price: 399.00},
    {mfr_name:"Video Storm",name:"CRM ",description:"CRM Audio Matrix Rack Mount Ears",purchase_price: 23.00}
  ]

  product_table.map((product) => {
    doc = {
      mfr_name: product.mfr_name,
      name: product.name,
      description: product.description,
      purchase_price: product.purchase_price
    }
    Products.insert(doc)
  })
}

if (!ProductHistory.findOne()) {
  for (let lc = 1; lc <= 5; lc++) {
    const name = `product_history_name: ${lc}`;
    const vendor = `${lc}'s vendor`;
    ProductHistory.insert({name, vendor});
  }
}
