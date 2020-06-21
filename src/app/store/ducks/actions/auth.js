import actionTypes from "../actionTypes/auth";

const actions = {
  login: ({ authToken, user }) => ({ type: actionTypes.Login, payload: { authToken, user } }),
  logout: () => ({ type: actionTypes.Logout }),
};

export function* authSaga() {
}
export default actions;
