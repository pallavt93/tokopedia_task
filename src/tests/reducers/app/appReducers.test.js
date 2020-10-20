import appReducers from '../../../client/reducers/app/appReducers';
import actionTypes from '../../../client/enums/actionTypes';

test('should setup default app state', ()=> {
    const state = appReducers(undefined, { type: '@@INIT'});
    expect(state).toEqual({});
});

test('should setup state to initialData', ()=> {
    const initialData = { logo: "logo_location", carousel: ['crousel 1']};
    const action = {
        type: actionTypes.FETCH_INITIAL_APP_DATA,
        payload: initialData
    };
    const state = appReducers(undefined, action);
    expect(state).toEqual( initialData );
});