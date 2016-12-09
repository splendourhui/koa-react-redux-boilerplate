/**
* @Author: SplendourHui
* @Date:   2016-12-09T11:17:28+08:00
* @Last modified by:   SplendourHui
* @Last modified time: 2016-12-09T12:19:56+08:00
*/

import {combineReducers} from 'redux';

import defines from '../defines';
import {getAction} from '../tools';

import {NAME as commonPrefix} from './constants';

// import message from '../message';
// const messagePrefix = message.constants.NAME;

export default combineReducers({
  globalLoading: (state = {
    show: false,
    msg: ''
  }, action) => {
    switch (action.type) {
      case getAction(commonPrefix, 'showLoading'):
        return {
          show: true,
          msg: action.data || 'loading'
        };

      case getAction(commonPrefix, 'hideLoading'):
      // case getAction(messagePrefix, 'showToast'):
      // case getAction(messagePrefix, 'showNotification'):
        return {
          show: false,
          msg: ''
        };

      default:
        return state;
    }
  }
});
