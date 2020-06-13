import { put, takeLatest, call } from "redux-saga/effects";
import actionTypes from "../actionTypes/users";
import messageTypes from "../actionTypes/message";
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
  setUserRoles: (params) => ({
    type: actionTypes.UPDATE_USER_ROLES_REQUEST,
    payload: params,
  }),
  setUserStatus: (params) => ({
    type: actionTypes.UPDATE_USER_STATUS_REQUEST,
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
    yield put({ type: messageTypes.SHOW_SUCCESS_MESSAGE, payload: { message: "User has been deleted successfully!"} });
  } catch (error) {
    yield put({ type: actionTypes.DELETE_USER_ERROR, payload: error });
    yield put({ type: messageTypes.SHOW_ERROR_MESSAGE, payload: { message: "There's something wrong!"} });

  }
}

function* addUser(action) {
  try {
    const response = yield call(userApi().addUser, action.payload);
    console.log("addUser", response);

    const { data } = response;
    yield put({ type: actionTypes.ADD_USER_SUCCESS, payload: data });
    yield put({ type: messageTypes.SHOW_SUCCESS_MESSAGE, payload: { message: "User has been added successfully!"} });
  } catch (error) {
    yield put({ type: actionTypes.ADD_USER_ERROR, payload: error });
    yield put({ type: messageTypes.SHOW_ERROR_MESSAGE, payload: { message: "There's something wrong!"} });

  }
}

function* setUserStatus(action) {
  try {
    const response = yield call(userApi().setUserStatus, action.payload)
    const { data } = response;
    const { is_active, id } = action.payload;
    console.log("setUserActive", response);

    yield put({ type: actionTypes.UPDATE_USER_SUCCESS, payload: data });
    yield put({ type: messageTypes.SHOW_SUCCESS_MESSAGE, payload: { message: `User ${id} has been ${is_active ? "blocked" : "unblocked"} successfully!`} });
  } catch (error) {
    yield put({ type: actionTypes.UPDATE_USER_ERROR, payload: error });
    yield put({ type: messageTypes.SHOW_ERROR_MESSAGE, payload: { message: "There's something wrong!"} });
  }
}

function* setUserRoles(action) {
  try {
    const response = yield call(userApi().setUserRoles, action.payload)
    const { data } = response;
    const { id } = action.payload;

    console.log("setUserRoles", response);

    yield put({ type: actionTypes.UPDATE_USER_SUCCESS, payload: data });
    yield put({ type: messageTypes.SHOW_SUCCESS_MESSAGE, payload: { message: `User ${id} has been updated successfully!`} });
  } catch (error) {
    yield put({ type: actionTypes.UPDATE_USER_ERROR, payload: error });
    yield put({ type: messageTypes.SHOW_ERROR_MESSAGE, payload: { message: "There's something wrong!"} });
  }
}
export default actions;