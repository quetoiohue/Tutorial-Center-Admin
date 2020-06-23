import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import * as routerHelpers from "../../../router/RouterHelpers";
import actionTypes from "../actionTypes/auth";

const initialAuthState = {
  user: undefined,
  authToken: undefined,
};

const reducer = persistReducer(
  { storage, key: "demo1-auth", whitelist: ["user", "authToken"] },
  (state = initialAuthState, action) => {
    switch (action.type) {
      case actionTypes.Login: {
        const { authToken, user } = action.payload;

        return { authToken, user: { ...user } };
      }

      case actionTypes.Logout: {
        routerHelpers.forgotLastLocation();
        return initialAuthState;
      }

      default:
        return state;
    }
  }
);

export default reducer;
