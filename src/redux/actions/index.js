import { ADD_PRODUCT, DELETE_PRODUCT, FETCH_PRODUCT, UPDATE_PRODUCT, EDIT,ERROR_MESSAGE } from './types';
import axios from 'axios';

export const addProduct = (name, quantity, price) => {
    return (dispatch) => {
        return axios.post("http://localhost:27017/api/putData", {
            name: name,
            price: price,
            quantity: quantity
        }).then(response => {
            dispatch(addProductSuccess(response.data))
        })
            .catch(error => {
                throw (error);
            })
    }
}

export const addProductSuccess = (data) => {
    return {
        type: ADD_PRODUCT,
        payload: {
            name: data.name,
            quantity: data.quantity,
            price: data.price
        }
    }
};

export const deleteProduct = id => {
    return (dispatch) => {
        return axios.delete("http://localhost:27017/api/deleteData", {
            data: {
                id: id
            }
        })
            .then(response => {
                dispatch(deleteProductSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            })
    };
}

export const deleteProductSuccess = () => {
    return {
        type: DELETE_PRODUCT,
        payload: {
            updatePage: true
        }
    }
};

export const fetchProducts = () =>  {
    return (dispatch) => {
        return axios.get('http://localhost:27017/api/getData')
            .then(response => {
                dispatch(fetchProductSuccess(response.data.data))
            })
            .catch(error => {
                throw (error);
            });
    }
}

export const fetchProductSuccess = (products) => {
    return {
        type: FETCH_PRODUCT,
        products
    }
}

export const updateProduct = (idToUpdate, name, quantity, price) => {
    return (dispatch) => {
        return axios.post('http://localhost:27017/api/updateData', {
            id: idToUpdate,
            update: {
                name: name,
                quantity: quantity,
                price: price
            }
        })
            .then(response => {
                dispatch(updateProductSuccess(response.data))
            })
    }
}

export const updateProductSuccess = (data) => {
    return {
        type: UPDATE_PRODUCT,
        payload: {
            name: data.name,
            quantity: data.quantity,
            price: data.price
        }
    }
};

export const edit = (edit) => {
    return {
        type: EDIT,
        edit: edit
    }
}

export const errorMessage = (message,open) => {
    return {
        type: ERROR_MESSAGE,
        payload : {
            message: message,
            openErrorMessage:open
        }

    }
}