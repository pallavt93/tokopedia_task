import { getProducts } from '../../../client/actions/products/productsActions';
import actionTypes from '../../../client/enums/actionTypes';

test('should set up product Data object', ()=> {
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
    const action = getProducts(productsData);

    expect(action).toEqual({
        type: actionTypes.FETCH_PRODUCTS,
        payload: productsData
    });

});