import { combineReducers } from 'redux';
import productsReducer from './products/productsReducers'; 
import appReducer from './app/appReducers';
import productReducer from './products/productReducers';
import productsPageReducers from './products/productsPageReducers';

export default combineReducers({
    products: productsReducer,
    initialAppData: appReducer,
    product: productReducer,
    productsPage: productsPageReducers
});