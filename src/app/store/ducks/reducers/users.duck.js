import actionTypes from "../actionTypes/users";

const initialState = {
  users: [],
  isFetching: false,
  error: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_USER_LIST_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.GET_USER_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        users: action.payload,
      };
    case actionTypes.GET_USER_LIST_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case actionTypes.ADD_USER_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.ADD_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        users: [action.payload, ...state.users],
      };
    case actionTypes.ADD_USER_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case actionTypes.DELETE_USER_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.DELETE_USER_SUCCESS:
      const newUsers = state.users.filter(
        (_item) => _item.id !== action.payload.id
      );
      return {
        ...state,
        isFetching: false,
        users: newUsers,
      };
    case actionTypes.DELETE_USER_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case actionTypes.UPDATE_USER_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.UPDATE_USER_SUCCESS:
      const newUpdatedUsers = state.users.map((_item) => {
        if (_item.id === action.payload.id) {
          return action.payload;
        }
        return _item;
      });
      return {
        ...state,
        isFetching: false,
        users: newUpdatedUsers,
      };
    case actionTypes.UPDATE_USER_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
