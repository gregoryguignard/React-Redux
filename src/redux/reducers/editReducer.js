import { EDIT } from '../actions/types';

export default function productReducer(state = false, action) {
    switch (action.type) {
        case EDIT:
            return action.edit;
        default:
            return state;
    }
}