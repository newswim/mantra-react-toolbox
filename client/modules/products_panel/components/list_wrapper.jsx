import React from 'react'
import { List, ListSubHeader } from 'react-toolbox/lib/list';
import ProductList from '../containers/product_list'


const ListWrapper = () => (
  <List>
    <ListSubHeader caption='Products' />
    <ProductList />
  </List>
);

export default ListWrapper;
