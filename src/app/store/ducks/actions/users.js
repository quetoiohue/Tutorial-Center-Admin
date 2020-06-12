import { put, takeLatest, call } from "redux-saga/effects";
import actionTypes from "../actionTypes/users";
import userApi from '../api/users';

const actions = {
  getUserList: ({ offset, limit}) => ({ type: actionTypes.GET_USER_LIST_REQUEST, payload: { offset, limit} }),
  getUserById: (userId) => ({ type: actionTypes.GET_USER_BY_ID_REQUEST, payload: userId }),
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
  yield takeLatest(actionTypes.GET_USER_BY_ID_REQUEST, fetchUserById);
  yield takeLatest(actionTypes.ADD_USER_REQUEST, addUser);
  yield takeLatest(actionTypes.DELETE_USER_REQUEST, deleteUser);
  yield takeLatest(actionTypes.UPDATE_USER_ROLES_REQUEST, setUserRoles);
  yield takeLatest(actionTypes.UPDATE_USER_STATUS_REQUEST, setUserStatus);
}

function* fetchUserList(action) {
  try {
    const response = yield call(userApi().getUsers, { ...action.payload});
    const { data } = response;
    yield put({ type: actionTypes.GET_USER_LIST_SUCCESS, payload: data });
  } catch (error) {
    console.log("error" , error);
    yield put({ type: actionTypes.GET_USER_LIST_ERROR, payload: error });
  }
}

function* fetchUserById(action) {
  try {
    const response = yield call(userApi().getUserById, action.payload);
    const { data } = response;
    console.log("response", response);
    
    yield put({ type: actionTypes.GET_USER_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    console.log("error" , error);
    yield put({ type: actionTypes.GET_USER_BY_ID_ERROR, payload: error });
  }
}

function* deleteUser(action) {
  try {
    const response = yield call(userApi().deleteUserById, action.payload);
    const { data } = response;
    console.log("deleteUser", data);
    
    yield put({ type: actionTypes.DELETE_USER_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: actionTypes.DELETE_USER_ERROR, payload: error });
  }
}

function* addUser(action) {
  try {
    const response = yield call(userApi().addUser, action.payload);
    console.log("addUser", response);

    const { data } = response;
    yield put({ type: actionTypes.ADD_USER_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: actionTypes.ADD_USER_ERROR, payload: error });
  }
}

function* setUserStatus(action) {
  try {
    const response = yield call(userApi().setUserStatus, action.payload)
    const { data } = response;
    console.log("setUserActive", response);

    yield put({ type: actionTypes.UPDATE_USER_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: actionTypes.UPDATE_USER_ERROR, payload: error });
  }
}

function* setUserRoles(action) {
  try {
    const response = yield call(userApi().setUserRoles, action.payload)
    const { data } = response;
    console.log("setUserRoles", response);

    yield put({ type: actionTypes.UPDATE_USER_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: actionTypes.UPDATE_USER_ERROR, payload: error });
  }
}
export default actions;