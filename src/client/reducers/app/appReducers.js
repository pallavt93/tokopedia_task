import actionTypes from '../../enums/actionTypes';

export default (state={}, action) => {
    switch(action.type){
        case actionTypes.FETCH_INITIAL_APP_DATA:
            return action.payload;
        default:
            return state;

    }
}