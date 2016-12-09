/**
* @Author: SplendourHui
* @Date:   2016-09-04 18:17
* @Last modified by:   SplendourHui
* @Last modified time: 2016-12-09T13:51:23+08:00
*/

import {combineReducers} from 'redux';

import defines from '../defines';
import {getAction} from '../tools';

import {NAME as dialogPrefix} from './constants';

export default combineReducers({
  confirmDialog: (state = {
    show: false,
    msg: '确认要执行该操作吗？',
    confirmAction: void(0)
  }, action) => {
    switch (action.type) {
      case getAction(dialogPrefix, 'showConfirmDialog'):
        return Object.assign({}, state, {
          show: true,
          msg: action.data.msg,
          confirmAction: action.data.confirmAction
        });
      case getAction(dialogPrefix, 'hideConfirmDialog'):
        return Object.assign({}, state, {
          show: false
        });
      default:
        return state;
    }
  },

  confirmLoading: (state = false, action) => {
    // AJAX 类型的 action 失败时
    if (action.type.indexOf('FAIL') >= 0) {
      return false;
    }
    switch (action.type) {
      case getAction(dialogPrefix, 'showConfirmLoading'):
        return true;
      case getAction(dialogPrefix, 'hideConfirmLoading'):
      case getAction(dialogPrefix, 'hideConfirmDialog'):
        return false;
      default:
        return state;
    }
  }

});
