import messageActions from "../actionTypes/message";

const actions = {
  showSuccessMessage: message => ({
    type: messageActions.SHOW_SUCCESS_MESSAGE,
    payload: message
  }),
  showErrorMessage: message => ({
    type: messageActions.SHOW_ERROR_MESSAGE,
    payload: message
  }),
  hiddenMessage: () => ({ type: messageActions.HIDDEN_MESSAGE })
};

export default actions;
