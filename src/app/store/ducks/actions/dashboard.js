import { call, takeLatest, put } from 'redux-saga/effects';

import * as actionTypes from '../actionTypes/dashboard';
import dashboardApi from '../api/dashboard';

const actions = {
    getOverview: () => ({ type: actionTypes.GET_OVERVIEW_REQUEST }),
    getUserOverview: (params) => ({ type: actionTypes.GET_USER_OVERVIEW_REQUEST, payload: params }),
    getTutorialOverview: (params) => ({ type: actionTypes.GET_TUTORIAL_OVERVIEW_REQUEST, payload: params }),
    getCommentOverview: (params) => ({ type: actionTypes.GET_COMMENT_OVERVIEW_REQUEST, payload: params }),
    getViewOverview: (params) => ({ type: actionTypes.GET_VIEW_OVERVIEW_REQUEST, payload: params }),
}

export function* dashboardSaga () {    
    yield takeLatest(actionTypes.GET_OVERVIEW_REQUEST , fetchOverview );
    yield takeLatest(actionTypes.GET_USER_OVERVIEW_REQUEST , fetchUserOverview );
    yield takeLatest(actionTypes.GET_TUTORIAL_OVERVIEW_REQUEST , fetchTutorialOverview );
    yield takeLatest(actionTypes.GET_COMMENT_OVERVIEW_REQUEST , fetchCommentOverview );
    yield takeLatest(actionTypes.GET_VIEW_OVERVIEW_REQUEST , fetchViewOverview );
}

function* fetchOverview () {
    try {
        const response = yield call(dashboardApi().getOverview);        
        const { data } = response;
        yield put({ type: actionTypes.GET_OVERVIEW_SUCCESS , payload: data});
    } catch (error) {
        yield put({ type: actionTypes.GET_OVERVIEW_ERROR , payload: error});
    }
}

function* fetchUserOverview (action) {
    try {
        const response = yield call(dashboardApi().getUserOverview, action.payload);        
        const { data } = response;
        console.log("fetchUserOverview", data);
        
        yield put({ type: actionTypes.GET_USER_OVERVIEW_SUCCESS , payload: data});
    } catch (error) {
        yield put({ type: actionTypes.GET_USER_OVERVIEW_ERROR , payload: error});
    }
}

function* fetchTutorialOverview (action) {
    try {
        const response = yield call(dashboardApi().getOverview);        
        const { data } = response;
        console.log("fetchTutorialOverview", data);

        yield put({ type: actionTypes.GET_OVERVIEW_SUCCESS , payload: data});
    } catch (error) {
        yield put({ type: actionTypes.GET_OVERVIEW_ERROR , payload: error});
    }
}
function* fetchCommentOverview (action) {
    try {
        const response = yield call(dashboardApi().getOverview);        
        const { data } = response;
        console.log("fetchCommentOverview", data);

        yield put({ type: actionTypes.GET_OVERVIEW_SUCCESS , payload: data});
    } catch (error) {
        yield put({ type: actionTypes.GET_OVERVIEW_ERROR , payload: error});
    }
}
function* fetchViewOverview (action) {
    try {
        const response = yield call(dashboardApi().getOverview);        
        const { data } = response;
        console.log("fetchViewOverview", data);

        yield put({ type: actionTypes.GET_OVERVIEW_SUCCESS , payload: data});
    } catch (error) {
        yield put({ type: actionTypes.GET_OVERVIEW_ERROR , payload: error});
    }
}
export default actions;