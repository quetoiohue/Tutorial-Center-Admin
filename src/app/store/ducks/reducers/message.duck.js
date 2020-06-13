import actionTypes from "../actionTypes/message";

const initialState = {
  title: "",
  message: "",
  color: "",
  visible: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SHOW_SUCCESS_MESSAGE:
      return {
        ...action.payload,
        title: "Success",
        color: "success",
        visible: true,
      };
    case actionTypes.SHOW_ERROR_MESSAGE:
      return {
        ...action.payload,
        title: "Error",
        color: "error",
        visible: true,
      };
    case actionTypes.HIDDEN_MESSAGE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
