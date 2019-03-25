import { combineReducers } from 'redux';

import productList from './modules/ProductList/ProductList.reducer';
import cartReducer from './modules/Cart/Cart.reducer';

export default combineReducers({
    productList,
    cartReducer,
});