import actionTypes from '../../enums/actionTypes';

export default (state=[], action) => {
    switch(action.type){
        case actionTypes.FETCH_PRODUCTS:
            return [...state, ...action.payload];
        default:
            return state;

    }
}