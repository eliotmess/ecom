import { combineReducers } from 'redux';

import productList from './components/ProductList/ProductListReducer';
import cartReducer from './components/Cart/CartReducer';

export default combineReducers({
    productList,
    cartReducer,
});