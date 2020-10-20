import axios from 'axios';
import actionTypes from '../../enums/actionTypes';


export const getProduct = (product = {}) => {
    return {
        type: actionTypes.FETCH_PRODUCT,
        payload: product
    }
}

export const fetchProduct = (productId) => async dispatch => {
    const res = await axios.get(`https://node-sample-api.herokuapp.com/api/products/${productId}`);
    dispatch(getProduct(res.data));
}