import { getInitialData } from '../../../client/actions/app/appActions';
import actionTypes from '../../../client/enums/actionTypes';

test('should set up initial App Data object', ()=> {
    const initialData = { logo: "logo_location", carousel: ['crousel 1']};
    const action = getInitialData(initialData);

    expect(action).toEqual({
        type: actionTypes.FETCH_INITIAL_APP_DATA,
        payload: initialData
    });

});