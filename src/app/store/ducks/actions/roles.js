import { put, takeLatest, call } from "redux-saga/effects";

import roleActions from '../actionTypes/roles';
import roleApi from '../api/roles';

const actions = {
    getRoles: () => ({ type: roleActions.GET_ROLE_LIST_REQUEST}),
}

export function* rolesSaga() {
    yield takeLatest(roleActions.GET_ROLE_LIST_REQUEST, fetchRoles);
}

function* fetchRoles () {
    try {
        const response = yield call(roleApi().getRoles);
        const { data } = response;

        console.log("fetchRoles", data);
        
        yield put({ type: roleActions.GET_ROLE_LIST_SUCCESS, payload: data });
    } catch (error) {
        console.log(error); 
        yield put({ type: roleActions.GET_ROLE_LIST_ERROR, payload: error})
    }
}

export default actions;