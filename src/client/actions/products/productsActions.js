import axios from 'axios';
import actionTypes from '../../enums/actionTypes';

export const getProducts = (products = []) => {
    return {
        type: actionTypes.FETCH_PRODUCTS,
        payload: products
    }
}

export const fetchProducts = (pageNumber) => async dispatch => {
    const res = await axios.get(`https://node-sample-api.herokuapp.com/api/products?page=${pageNumber}`);
    let products = res.data.data;
    
    return new Promise((resolve, reject)=>{
        if(products.length === 10){
            dispatch(getProducts(products));
            resolve(1);
        }else{
            reject("no more data to fetch");
        }
    });
}

export const getProductsPage = () => async dispatch => {
    dispatch({
        type: actionTypes.GET_PAGE_NUMBER
    })
}

export const setProductsPage = (page) => async dispatch => {
    dispatch({
        type: actionTypes.SET_PAGE_NUMBER,
        payload: page
    });
}

export const incrementProductPage = () => async dispatch => {
    dispatch({
        type: actionTypes.INCREMENT_PAGE_NUMBER
    });
}


