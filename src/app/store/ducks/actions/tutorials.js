import { put, takeLatest, call, yeild } from "redux-saga/effects";

import tutorialActions from '../actionTypes/tutorials';
import tutorialApi from '../api/tutorials';

const actions = {
    getTutorials: () => ({ type: tutorialActions.GET_TUTORIAL_LIST_REQUEST }),
    getTutorialById: (id) => ({ type: tutorialActions.GET_TUTORIAL_BY_ID_REQUEST, payload: id }),
    deleteTutorialById: (params) => ({ type: tutorialActions.DELETE_TUTORIAL_REQUEST, payload: params }),
    setActiveTutorialById: (params) => ({ type: tutorialActions.UPDATE_TUTORIAL_REQUEST, payload: params }),
}

export function* tutorialSaga() {
    yield takeLatest(tutorialActions.GET_TUTORIAL_LIST_REQUEST, fetchTutorials);
    yield takeLatest(tutorialActions.GET_TUTORIAL_BY_ID_REQUEST, fetchTutorialById);
    yield takeLatest(tutorialActions.DELETE_TUTORIAL_REQUEST, handleDeleteTutorialById);
    yield takeLatest(tutorialActions.UPDATE_TUTORIAL_REQUEST, handleSetActiveTutorialById);
}

function* fetchTutorials () {
    try {
        const response = yield call(tutorialApi().getTutorials);
        const { data } = response; 
        console.log("response", response);
        
        yield put({ type: tutorialActions.GET_TUTORIAL_LIST_SUCCESS, payload: data });
    } catch (error) {
        console.log(error); 
        yield put({ type: tutorialActions.GET_TUTORIAL_LIST_ERROR, payload: error})
    }
}

function* fetchTutorialById (action) {
    try {
        const response = yield call(tutorialApi().getTutorialById, action.payload );
        const { data } = response;
        yield put({ type: tutorialActions.GET_TUTORIAL_BY_ID_SUCCESS, payload: data });
    } catch (error) {
        console.log(error); 
        yield put({ type: tutorialActions.GET_TUTORIAL_BY_ID_ERROR, payload: error})
    }
}

function* handleDeleteTutorialById (action) {
    try {
        const response = yield call(tutorialApi().deleteTutorialById, action.payload );
        const { data } = response;
        yield put({ type: tutorialActions.DELETE_TUTORIAL_SUCCESS, payload: data.id });
    } catch (error) {
        console.log(error); 
        yield put({ type: tutorialActions.DELETE_TUTORIAL_ERROR, payload: error})
    }
}

function* handleSetActiveTutorialById (action) {
    try {
        const response = yield call(tutorialApi().setActiveTutorialById, action.payload );
        const { data } = response;
        yield put({ type: tutorialActions.UPDATE_TUTORIAL_SUCCESS, payload: data });
    } catch (error) {
        console.log(error); 
        yield put({ type: tutorialActions.UPDATE_TUTORIAL_ERROR, payload: error})
    }
}

export default actions;