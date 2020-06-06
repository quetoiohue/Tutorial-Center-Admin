import actionTypes from "../actionTypes/auth";

const actions = {
  login: (authToken) => ({ type: actionTypes.Login, payload: { authToken } }),
  logout: () => ({ type: actionTypes.Logout }),
};

export function* authSaga() {
}
export default actions;
