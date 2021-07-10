// Imports 
import { combineReducers } from "redux";
import assemblies from './assembly/assembly-slice'
import batch from './batch/batch-slice'
import composition from './composition/composition-slice'
import item from './item/item-slice'
import product from './product/product-slice'
import productGroup from './product-group/product-group-slice'
import uid from './uid/uid-slice'
import uidParam from './uid-param/uid-param-slice'

// Exports 
export default combineReducers({assemblies, batch, composition, item, product, productGroup, uid, uidParam})