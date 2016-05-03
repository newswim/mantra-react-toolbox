import React from 'react'
import { List, ListSubHeader } from 'react-toolbox/lib/list'
import ProductList from '../containers/product_list'
import style from './product.scss'


const ListWrapper = () => (
  <div className={style.listWrapper}>
    <List>
      <ListSubHeader caption='Products' />
      <ProductList />
    </List>
  </div>
)

export default ListWrapper
