import productsReducers from '../../../client/reducers/products/productsReducers';
import actionTypes from '../../../client/enums/actionTypes';

test('should setup default products state', ()=> {
    const state = productsReducers(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should setup state to products data', ()=> {
    const productsData = [
        {
            id: "1", 
            name: "Product 1", 
            price: "993",
            img:"image"
        },
        {
            id: "3", 
            name: "Product 2", 
            price: "983",
            img:"image"
        }
    ];
    const action = {
        type: actionTypes.FETCH_PRODUCTS,
        payload: productsData
    };
    const state = productsReducers(undefined, action);
    expect(state).toEqual( productsData );
});