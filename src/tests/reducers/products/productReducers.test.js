import productReducers from '../../../client/reducers/products/productReducers';
import actionTypes from '../../../client/enums/actionTypes';

test('should setup default product state', ()=> {
    const state = productReducers(undefined, { type: '@@INIT'});
    expect(state).toEqual({});
});

test('should setup state to product data', ()=> {
    const productData = {
        id: "1", 
        name: "Product 1", 
        rating: 2, 
        price: "Rs 223",
        img:"image", 
        description: "products description"
    };
    const action = {
        type: actionTypes.FETCH_PRODUCT,
        payload: productData
    };
    const state = productReducers(undefined, action);
    expect(state).toEqual( productData );
});