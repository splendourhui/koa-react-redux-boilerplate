/**
* @Author: SamChan
* @Date:   2016-08-30T14:41:57+08:00
* @Last modified by:   SamChan
* @Last modified time: 2016-08-30T15:53:26+08:00
*/

import {pushState} from 'redux-router';

import {CALL_API} from '../middlewares/request';
import Schemas from '../store/schemas';
import defines from '../utils/defines';

const getPath = (path, data) => {
  const replaceStrings = path.match(/\$\{\w*\}/g);
  if (!replaceStrings) return path;
  let result = path;
  replaceStrings.forEach(replaceString =>
    result = result.replace(replaceString,
      data[replaceString.substring(2, replaceString.length - 1)])
  );
  return result;
};

const getSucMsg = (msgType) => {
  switch (msgType) {
    case defines.AJAX_TYPE_OPERATION:
      return '操作成功';
    case defines.AJAX_TYPE_LOAD:
    default:
      return '';
  }
};

const getErrMsg = (msgType) => {
  switch (msgType) {
    case defines.AJAX_TYPE_OPERATION:
      return '操作失败，请重试';
    case defines.AJAX_TYPE_LOAD:
      return '数据载入失败，请重试';
    default:
      return '';
  }
};

const actionList = (actionPrefix, actions) =>
  actions.map(action =>
    action.isAjax ? ({
      [`${actionPrefix}_${action.name.toUpperCase()}_LOAD`]:
        `${actionPrefix}_${action.name.toUpperCase()}_LOAD`,
      [`${actionPrefix}_${action.name.toUpperCase()}_SUCCESS`]:
        `${actionPrefix}_${action.name.toUpperCase()}_SUCCESS`,
      [`${actionPrefix}_${action.name.toUpperCase()}_FAIL`]:
        `${actionPrefix}_${action.name.toUpperCase()}_FAIL`,
      [action.name]: (data, sucCallback, errCallback) =>
        (dispatch, getState) =>
          dispatch({
            [CALL_API]: {
              types: [
                `${actionPrefix}_${action.name.toUpperCase()}_LOAD`,
                `${actionPrefix}_${action.name.toUpperCase()}_SUCCESS`,
                `${actionPrefix}_${action.name.toUpperCase()}_FAIL`
              ],
              endpoint: getPath(action.path, data),
              schema: action.schema || Schemas.NORMAL_RESP,
              method: action.method,
              sucMsg: action.sucMsg || getSucMsg(action.msgType),
              errMsg: action.errMsg || getErrMsg(action.msgType),
              data,
              sucCallback,
              errCallback
            }
          })
    }) : ({
      [`${actionPrefix}_${action.name}`]:
        `${actionPrefix}_${action.name}`,
      [action.name]: data => ({
        type: `${actionPrefix}_${action.name}`,
        data
      })
    })
  );

export default (actionPrefix, actions) => {
  const result = {};
  actionList(actionPrefix, actions).forEach(action =>
    Object.assign(result, action)
  );
  return result;
};
