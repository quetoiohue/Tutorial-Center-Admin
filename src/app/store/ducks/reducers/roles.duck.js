import actionTypes from "../actionTypes/roles";

const initialState = {
  roles: [],
  isFetching: false,
  error: ""
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_ROLE_LIST_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case actionTypes.GET_ROLE_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        roles: action.payload
      };
    case actionTypes.GET_ROLE_LIST_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
}
