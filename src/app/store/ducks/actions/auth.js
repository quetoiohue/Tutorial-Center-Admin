import { put, takeLatest } from "redux-saga/effects";
import { getUserByToken } from "../../../crud/auth.crud";
import actionTypes from "../actionTypes/auth";

const actions = {
  login: (authToken) => ({ type: actionTypes.Login, payload: { authToken } }),
  register: (authToken) => ({
    type: actionTypes.Register,
    payload: { authToken },
  }),
  logout: () => ({ type: actionTypes.Logout }),
  requestUser: (user) => ({
    type: actionTypes.UserRequested,
    payload: { user },
  }),
  fulfillUser: (user) => ({ type: actionTypes.UserLoaded, payload: { user } }),
};

export function* authSaga() {
  yield takeLatest(actionTypes.Login, function* loginSaga() {
    yield put(actions.requestUser());
  });
}
export default actions;
