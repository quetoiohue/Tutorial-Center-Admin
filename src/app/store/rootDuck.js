import { all } from "redux-saga/effects";
import { combineReducers } from "redux";
import { authSaga } from "./ducks/actions/auth";
import { usersSaga } from "./ducks/actions/users";
import { tutorialSaga } from "./ducks/actions/tutorials";
import { rolesSaga } from "./ducks/actions/roles";

import * as reducers from "./ducks/reducers";
import { metronic } from "../../_metronic";

export const rootReducer = combineReducers({
  auth: reducers.authReducer,
  userList: reducers.usersReducer,
  tutorialList: reducers.tutorialsReducer,
  roleList: reducers.rolesReducer,
  notification: reducers.messageReducer,
  i18n: metronic.i18n.reducer,
  builder: metronic.builder.reducer,
});

export function* rootSaga() {
  yield all([authSaga(), usersSaga(), tutorialSaga(), rolesSaga()]);
}
