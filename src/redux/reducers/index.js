import { combineReducers } from 'redux';
import products from './productReducer';
import edit from './editReducer';

export default combineReducers({
    products: products,
    edit: edit
})