import tutorialActions from "../actionTypes/tutorials";

const initialState = {
  tutorials: [],
  getTutorialById: {},
  isFetching: true,
  error: "",
  count: 0
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case tutorialActions.GET_TUTORIAL_LIST_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case tutorialActions.GET_TUTORIAL_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        tutorials: action.payload.data,
        count: action.payload.count
      };
    case tutorialActions.GET_TUTORIAL_LIST_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case tutorialActions.GET_TUTORIAL_BY_ID_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case tutorialActions.GET_TUTORIAL_BY_ID_SUCCESS:
      return {
        ...state,
        isFetching: false,
        getTutorialById: action.payload
      };
    case tutorialActions.GET_TUTORIAL_BY_ID_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case tutorialActions.UPDATE_TUTORIAL_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case tutorialActions.UPDATE_TUTORIAL_SUCCESS:
      const updatedItemIndex = state.tutorials.findIndex(
        _item => _item.id === action.payload.id
      );
      state.tutorials.splice(updatedItemIndex, 1, action.payload);

      return {
        ...state,
        isFetching: false,
        tutorials: [...state.tutorials]
      };
    case tutorialActions.UPDATE_TUTORIAL_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case tutorialActions.DELETE_TUTORIAL_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case tutorialActions.DELETE_TUTORIAL_SUCCESS:
      const deletedItemIndex = state.tutorials.findIndex(
        _item => _item.id === action.payload
      );
      state.tutorials.splice(deletedItemIndex, 1);

      return {
        ...state,
        isFetching: false,
        tutorials: [...state.tutorials]
      };
    case tutorialActions.DELETE_TUTORIAL_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
}
