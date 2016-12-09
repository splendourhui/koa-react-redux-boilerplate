/**
* @Author: SplendourHui
* @Date:   2016-12-09T13:46:07+08:00
* @Last modified by:   SplendourHui
* @Last modified time: 2016-12-09T14:07:25+08:00
*/

import {combineReducers} from 'redux';

import defines from '../defines';
import {getAction} from '../tools';

import {NAME as messagePrefix} from './constants';

import commonActions, {commonActionConfigs} from '../common/actions';
import common from '../common';
const commonPrefix = common.constants.NAME;

const toastActionList = [];
const noticeActionList = [];

// classify actions to noticeActionList and toastActionList
(() => {
  const addToList = (prefix, actions) => {
    actions.forEach(action => {
      if (action.msgType === defines.AJAX_TYPE_LOAD) {
        // notification when load fail
        noticeActionList.push(getAction(prefix, action.name, defines.ACTION_STATUS_FAIL));
      } else if (action.msgType === defines.AJAX_TYPE_OPERATION) {
        // toast when operation success and fail
        toastActionList.push(getAction(prefix, action.name, defines.ACTION_STATUS_SUCCESS));
        toastActionList.push(getAction(prefix, action.name, defines.ACTION_STATUS_FAIL));
      }
    });
  };

  addToList(commonPrefix, commonActionConfigs);
})();

const toastStateHide = () => ({
  show: false,
  msgType: 'info',
  msg: '',
  key: '',
  hold: 1
});
const toastStateShow = action => ({
  show: true,
  msgType: action.data.msgType,
  msg: action.data.msg,
  key: action.data.key,
  hold: action.data.hold
});
const notificationStateHide = () => ({
  show: false,
  msgType: 'info',
  title: '',
  content: '',
  key: '',
  hold: 1
});
const notificationStateShow = action => ({
  show: true,
  msgType: action.data.msgType,
  title: action.data.title || '出错啦',
  content: action.data.msg,
  key: action.data.key,
  hold: action.data.hold
});
const notificationStateUnauthorized = action => ({
  show: true,
  msgType: 'error',
  title: '校验失败',
  content: '请重新登录',
  key: action.data.key,
  hold: 5
});
export default combineReducers({
  toast: (state = toastStateHide(), action) => {
    if (toastActionList.indexOf(action.type) >= 0) {
      return toastStateShow(action);
    }
    switch (action.type) {
      case getAction(messagePrefix, 'showToast'):
        return toastStateShow(action);
      case getAction(messagePrefix, 'hideToast'):
        return toastStateHide();
      default:
        return state;
    }
  },
  notification: (state = notificationStateHide(), action) => {
    if (noticeActionList.indexOf(action.type) >= 0) {
      return notificationStateShow(action);
    }
    switch (action.type) {
      case getAction(messagePrefix, 'showNotification'):
        return notificationStateShow(action);
      case getAction(messagePrefix, 'hideNotification'):
        return notificationStateHide();
      default:
        return state;
    }
  }
});
