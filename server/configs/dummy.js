import Products from '/lib/collections/products';

//export default function () {
if (!Products.findOne()) {
  for (let lc = 1; lc <= 5; lc++) {
    const name = `This is the product name: ${lc}`;
    const vendor = `${lc}'s vendor`;
    Products.insert({name, vendor});
  }
}
// }
