import * as actionTypes from "../actionTypes/dashboard";

const initialState = {
  overview: {
    data: {},
    isFetching: false,
    error: ""
  },
  comments: {
    data: {},
    isFetching: false,
    error: ""
  },
  users: {
    data: {},
    isFetching: false,
    error: ""
  },
  tutorials: {
    data: {},
    isFetching: false,
    error: ""
  },
  views: {
    data: {},
    isFetching: false,
    error: ""
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_OVERVIEW_REQUEST:
      return {
        ...state,
        overview: {
          ...state.overview,
          isFetching: true,
          error: ""
        }
      };
    case actionTypes.GET_OVERVIEW_SUCCESS:
      return {
        ...state,
        overview: {
          data: action.payload,
          isFetching: false,
          error: ""
        }
      };
    case actionTypes.GET_OVERVIEW_ERROR:
      return {
        ...state,
        overview: {
          ...state.overview,
          isFetching: false,
          error: action.payload
        }
      };
    case actionTypes.GET_USER_OVERVIEW_REQUEST:
      return {
        ...state,
        users: {
          ...state.users,
          isFetching: true,
          error: ""
        }
      };
    case actionTypes.GET_USER_OVERVIEW_SUCCESS:
      return {
        ...state,
        users: {
          data: action.payload,
          isFetching: false,
          error: ""
        }
      };
    case actionTypes.GET_USER_OVERVIEW_ERROR:
      return {
        ...state,
        users: {
          ...state.overview,
          isFetching: false,
          error: action.payload
        }
      };
    case actionTypes.GET_TUTORIAL_OVERVIEW_REQUEST:
      return {
        ...state,
        tutorials: {
          ...state.tutorials,
          isFetching: true,
          error: ""
        }
      };
    case actionTypes.GET_TUTORIAL_OVERVIEW_SUCCESS:
      return {
        ...state,
        tutorials: {
          data: action.payload,
          isFetching: false,
          error: ""
        }
      };
    case actionTypes.GET_TUTORIAL_OVERVIEW_ERROR:
      return {
        ...state,
        tutorials: {
          ...state.tutorials,
          isFetching: false,
          error: action.payload
        }
      };
    case actionTypes.GET_COMMENT_OVERVIEW_REQUEST:
      return {
        ...state,
        comments: {
          ...state.comments,
          isFetching: true,
          error: ""
        }
      };
    case actionTypes.GET_COMMENT_OVERVIEW_SUCCESS:
      return {
        ...state,
        comments: {
          data: action.payload,
          isFetching: false,
          error: ""
        }
      };
    case actionTypes.GET_COMMENT_OVERVIEW_ERROR:
      return {
        ...state,
        comments: {
          ...state.comments,
          isFetching: false,
          error: action.payload
        }
      };
    case actionTypes.GET_VIEW_OVERVIEW_REQUEST:
      return {
        ...state,
        views: {
          ...state.views,
          isFetching: true,
          error: ""
        }
      };
    case actionTypes.GET_VIEW_OVERVIEW_SUCCESS:
      return {
        ...state,
        views: {
          data: action.payload,
          isFetching: false,
          error: ""
        }
      };
    case actionTypes.GET_VIEW_OVERVIEW_ERROR:
      return {
        ...state,
        views: {
          ...state.views,
          isFetching: false,
          error: action.payload
        }
      };
    default:
      return state;
  }
}
