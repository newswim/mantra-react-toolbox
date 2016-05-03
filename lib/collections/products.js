import {Mongo} from 'meteor/mongo';
import { ProductSchema } from '../schemata/products'

const Products = new Mongo.Collection('products')

Products.attachSchema(ProductSchema)

export default Products
