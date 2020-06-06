import { put, takeLatest, call } from "redux-saga/effects";
import actionTypes from "../actionTypes/users";
import userApi from '../api/users';

const actions = {
  getUserList: () => ({ type: actionTypes.GET_USER_LIST_REQUEST }),
  addUser: (params) => ({
    type: actionTypes.ADD_USER_REQUEST,
    payload: params,
  }),
  deleteUser: (params) => ({
    type: actionTypes.DELETE_USER_REQUEST,
    payload: params,
  }),
  updateUser: (params) => ({
    type: actionTypes.UPDATE_USER_REQUEST,
    payload: params,
  }),
};

export function* usersSaga() {
  yield takeLatest(actionTypes.GET_USER_LIST_REQUEST, fetchUserList);
  yield takeLatest(actionTypes.ADD_USER_REQUEST, addUser);
  yield takeLatest(actionTypes.DELETE_USER_REQUEST, deleteUser);
  yield takeLatest(actionTypes.UPDATE_USER_REQUEST, updateUser);
}

function* fetchUserList() {
  try {
    const response = yield call(userApi().getUsers);
    const { data } = response;
    yield put({ type: actionTypes.GET_USER_LIST_SUCCESS, payload: data });
  } catch (error) {
    console.log("error" , error);
    yield put({ type: actionTypes.GET_USER_LIST_ERROR, payload: error });
  }
}

function* deleteUser(action) {
  try {
    // const data = yield call(Api.fetchUser, action.payload.url);
    // const { payload } = action;
    yield put({ type: actionTypes.DELETE_USER_SUCCESS, payload: "data" });
  } catch (error) {
    yield put({ type: actionTypes.DELETE_USER_ERROR, payload: error });
  }
}

function* addUser(action) {
  try {
    // const data = yield call(Api.fetchUser, action.payload.url)
    const { payload } = action;
    yield put({ type: actionTypes.ADD_USER_SUCCESS, payload });
  } catch (error) {
    yield put({ type: actionTypes.ADD_USER_ERROR, payload: error });
  }
}

function* updateUser(action) {
  try {
    // const data = yield call(Api.fetchUser, action.payload.url)
    const { payload } = action;
    yield put({ type: actionTypes.UPDATE_USER_SUCCESS, payload });
  } catch (error) {
    yield put({ type: actionTypes.UPDATE_USER_ERROR, payload: error });
  }
}

export default actions;