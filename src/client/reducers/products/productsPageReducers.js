import actionTypes from '../../enums/actionTypes';

export default (state = {}, action) => {
    switch(action.type){
        case actionTypes.GET_PAGE_NUMBER:
            return state;
        case actionTypes.SET_PAGE_NUMBER:
            return action.payload;
        case action.INCREMENT_PAGE_NUMBER:
            return { ...state, pageNumber: state.pageNumber + 1 }
        default:
            return state;

    }
}