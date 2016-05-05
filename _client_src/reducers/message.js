/**
 * @Author: SplendourHui
 * @Date:   2016-05-05 20:06
* @Last modified by:   SplendourHui
* @Last modified time: 2016-05-05 20:20
 */



import {
  combineReducers
} from 'redux';

import * as messageActions from '../actions/common_message';

function errorMessage(state = '', action) {
  const {
    type,
    errMsg
  } = action;

  if (errMsg) {
    return action.errMsg;
  }

  return state;
}

function successMessage(state = '', action) {
  const {
    type,
    sucMsg
  } = action;

  if (sucMsg) {
    return action.sucMsg;
  }

  return state;
}

function showSucMsg(state = false, action) {
  if (action.type === messageActions.SHOW_SUCCESS_MSG) {
    return true;
  } else if (action.type === messageActions.HIDE_SUCCESS_MESSAGE) {
    return false;
  } else {
    return state;
  }
}

function showErrMsg(state = false, action) {
  if (action.type === messageActions.SHOW_ERROR_MSG) {
    return true;
  } else if (action.type === messageActions.HIDE_ERROR_MESSAGE) {
    return false;
  } else {
    return state;
  }
}

const messagesReducer = combineReducers({
  errorMessage,
  successMessage,
  showSucMsg,
  showErrMsg
});

export default messagesReducer;
