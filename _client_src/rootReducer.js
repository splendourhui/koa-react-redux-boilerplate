/**
* @Author: SplendourHui
* @Date:   2016-12-09T13:43:27+08:00
* @Last modified by:   SplendourHui
* @Last modified time: 2016-12-09T14:04:33+08:00
*/

import {routerStateReducer as router} from 'redux-router';
import {combineReducers} from 'redux';

import common from './modules/common';
import dialog from './modules/dialog';
import message from './modules/message';

const rootReducer = combineReducers({
  [common.constants.NAME]: common.reducer,
  [dialog.constants.NAME]: dialog.reducer,
  [message.constants.NAME]: message.reducer,
  router
});

export default rootReducer;
