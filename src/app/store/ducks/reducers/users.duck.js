import actionTypes from "../actionTypes/users";

const initialState = {
  users: [],
  getUserById: {},
  isFetching: false,
  error: "",
  count: 0,
};
const initialUserObject = {
  id: null,
  name: "",
  email: "",
  email_verified_at: null,
  is_active: 1,
  gender: 1,
  age: 0,
  avatar_url: null,
  background_image_url: null,
  created_at: null,
  updated_at: null,
  is_admin: false,
  permissionss: [],
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
        users: action.payload.data,
        count: action.payload.count,
      };
    case actionTypes.GET_USER_LIST_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case actionTypes.GET_USER_BY_ID_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.GET_USER_BY_ID_SUCCESS:
      return {
        ...state,
        isFetching: false,
        getUserById: action.payload,
      };
    case actionTypes.GET_USER_BY_ID_ERROR:
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
      const newObject = { ...initialUserObject, ...action.payload };
      return {
        ...state,
        isFetching: false,
        users: [newObject, ...state.users],
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
        (_item) => _item.id !== action.payload
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
    case actionTypes.UPDATE_USER_ROLES_REQUEST:
    case actionTypes.UPDATE_USER_STATUS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.UPDATE_USER_SUCCESS:
      const newUpdatedUsers = state.users.map((_item) => {
        if (_item.id === action.payload.id) {
          return {..._item, ...action.payload};
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
