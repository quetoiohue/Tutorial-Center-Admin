import actionTypes from "../actionTypes/roles";

const initialState = {
  roles: [],
  isFetching: false,
  error: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_ROLE_LIST_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.GET_ROLE_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        roles: action.payload,
      };
    case actionTypes.GET_ROLE_LIST_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case actionTypes.ADD_ROLE_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.ADD_ROLE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        roles: [action.payload, ...state.roles],
      };
    case actionTypes.ADD_ROLE_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case actionTypes.DELETE_ROLE_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.DELETE_ROLE_SUCCESS:
      const newroles = state.roles.filter(
        (_item) => _item.id !== action.payload.id
      );
      return {
        ...state,
        isFetching: false,
        roles: newroles,
      };
    case actionTypes.DELETE_ROLE_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case actionTypes.UPDATE_ROLE_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.UPDATE_ROLE_SUCCESS:
      const newUpdatedroles = state.roles.map((_item) => {
        if (_item.id === action.payload.id) {
          return action.payload;
        }
        return _item;
      });
      return {
        ...state,
        isFetching: false,
        roles: newUpdatedroles,
      };
    case actionTypes.UPDATE_ROLE_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
