import products from './products';
import product_history from './product_history';
import quotes from './quotes';
import addProductToQuote from './add_product_to_quote';

export default function () {
  products();
  product_history();
  quotes();
  addProductToQuote();
}
