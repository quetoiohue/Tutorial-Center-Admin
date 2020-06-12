import { put, takeLatest, call, yeild } from "redux-saga/effects";

import tutorialActions from '../actionTypes/tutorials';
import tutorialApi from '../api/tutorials';

const actions = {
    getTutorials: ({ offset, limit }) => ({ type: tutorialActions.GET_TUTORIAL_LIST_REQUEST, payload: { offset, limit } }),
    getTutorialById: (id) => ({ type: tutorialActions.GET_TUTORIAL_BY_ID_REQUEST, payload: id })
}

export function* tutorialSaga() {
    yield takeLatest(tutorialActions.GET_TUTORIAL_LIST_REQUEST, fetchTutorials);
}

function* fetchTutorials (action) {
    try {
        const response = yield call(tutorialApi().getTutorials, { ...action.payload });
        const { data } = response;
        yield put({ type: tutorialActions.GET_TUTORIAL_LIST_SUCCESS, payload: data });
    } catch (error) {
        console.log(error); 
        yield put({ type: tutorialActions.GET_TUTORIAL_LIST_ERROR, payload: error})
    }
}

function* fetchTutorialById (action) {
    try {
        const response = yield call(tutorialApi().getUserById, action.payload );
        const { data } = response;
        yield put({ type: tutorialActions.GET_TUTORIAL_BY_ID_SUCCESS, payload: data });
    } catch (error) {
        console.log(error); 
        yield put({ type: tutorialActions.GET_TUTORIAL_BY_ID_ERROR, payload: error})
    }
}

export default actions;