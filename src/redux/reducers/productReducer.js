import { ADD_PRODUCT, DELETE_PRODUCT, FETCH_PRODUCT, UPDATE_PRODUCT } from '../actions/types';

export default function productReducer(state = [], action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return [
                ...state, action.payload
            ];
        case DELETE_PRODUCT:
            return [...state,action.payload]
        case FETCH_PRODUCT:
            return action.products
        case UPDATE_PRODUCT:
            return[...state,action.payload]
        default:
            return state;
    }
}