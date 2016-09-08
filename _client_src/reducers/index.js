/**
* @Author: SplendourHui
* @Date:   2016-05-09 15:32
* @Last modified by:   SplendourHui
* @Last modified time: 2016-09-08 17:33
*/

import {
  routerStateReducer as router
} from 'redux-router';
import {
  combineReducers
} from 'redux';

import * as commonActions from '../actions/common';
import * as messageActions from '../actions/common_message';

import dialog from './dialog';
import message from './message';

function loading(state = false, action) {
  switch (action.type) {
    case commonActions.SHOW_LOADING:
      return true;

    case commonActions.HIDE_LOADING:
    case messageActions.SHOW_SUCCESS_MSG:
    case messageActions.SHOW_ERROR_MSG:
      return false;

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  loading,
  dialog,
  message,
  router
});

export default rootReducer;
