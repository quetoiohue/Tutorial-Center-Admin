import * as actionTypes from "../actionTypes/dashboard";

const initialState = {
  overview: {},
  comments: {},
  users: {},
  tutorials: {},
  views: {},
  isFetching: false,
  error: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_OVERVIEW_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case actionTypes.GET_OVERVIEW_SUCCESS:
      return {
        ...state,
        overview: action.payload,
        isFetching: false,
        error: "",
      };
    case actionTypes.GET_OVERVIEW_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case actionTypes.GET_USER_OVERVIEW_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case actionTypes.GET_USER_OVERVIEW_SUCCESS:
      return {
        ...state,
        users: action.payload,
        isFetching: false,
        error: "",
      };
    case actionTypes.GET_USER_OVERVIEW_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case actionTypes.GET_TUTORIAL_OVERVIEW_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case actionTypes.GET_TUTORIAL_OVERVIEW_SUCCESS:
      return {
        ...state,
        tutorials: action.payload,
        isFetching: false,
        error: "",
      };
    case actionTypes.GET_TUTORIAL_OVERVIEW_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case actionTypes.GET_COMMENT_OVERVIEW_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case actionTypes.GET_COMMENT_OVERVIEW_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        isFetching: false,
        error: "",
      };
    case actionTypes.GET_COMMENT_OVERVIEW_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case actionTypes.GET_VIEW_OVERVIEW_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case actionTypes.GET_VIEW_OVERVIEW_SUCCESS:
      return {
        ...state,
        overview: action.payload,
        isFetching: false,
        error: "",
      };
    case actionTypes.GET_VIEW_OVERVIEW_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
