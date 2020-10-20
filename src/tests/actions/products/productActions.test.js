import { getProduct } from '../../../client/actions/products/productActions';
import actionTypes from '../../../client/enums/actionTypes';

test('should set up product Data object', ()=> {
    const productData = {
            id: "1", 
            name: "Product 1", 
            rating: 2, 
            price: "Rs 223",
            img:"image", 
            description: "products description"
        };
    const action = getProduct(productData);

    expect(action).toEqual({
        type: actionTypes.FETCH_PRODUCT,
        payload: productData
    });

});