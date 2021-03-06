import actionTypes from '../../enums/actionTypes';

export default (state={}, action) => {
    switch(action.type){
        case actionTypes.FETCH_PRODUCT:
            return action.payload;
        default:
            return state;

    }
}