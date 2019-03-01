import { EDIT, ERROR_MESSAGE } from '../actions/types';

const initialState = {
    edit: false,
    message: '',
    openErrorMessage: false,
}

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case EDIT:
            return Object.assign({}, state, {
                edit: action.edit
            });
        case ERROR_MESSAGE:
            return Object.assign({}, state,action.payload)
        default:
            return state;
    }
}