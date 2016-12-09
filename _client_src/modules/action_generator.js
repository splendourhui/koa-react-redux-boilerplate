/**
* @Author: SplendourHui
* @Date:   2016-12-09T11:47:10+08:00
* @Last modified by:   SplendourHui
* @Last modified time: 2016-12-09T11:54:02+08:00
*/

import {pushState} from 'redux-router';

import {CALL_API} from '../middlewares/request';
import Schemas from '../store/schemas';
import map from 'ramda/src/map';
import forEach from 'ramda/src/forEach';
import defines from './defines';
import {getAction} from './tools';

// 将 path 中类似 ${id} 之类的字符串用 data 中对应的参数值替代，模仿 ES6 的模板字符串
const getPath = (path, data) => {
  const replaceStrings = path.match(/\$\{\w*\}/g);
  if (!replaceStrings) return path;
  let result = path;
  forEach(replaceString =>
    result = result.replace(replaceString,
      data[replaceString.substring(2, replaceString.length - 1)])
  )(replaceStrings);
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
  map(action =>
    action.isAjax ? ({
      // 三个状态
      [getAction(actionPrefix, action.name, defines.ACTION_STATUS_LOAD)]:
        getAction(actionPrefix, action.name, defines.ACTION_STATUS_LOAD),
      [getAction(actionPrefix, action.name, defines.ACTION_STATUS_SUCCESS)]:
        getAction(actionPrefix, action.name, defines.ACTION_STATUS_SUCCESS),
      [[getAction(actionPrefix, action.name, defines.ACTION_STATUS_FAIL)]]:
        [getAction(actionPrefix, action.name, defines.ACTION_STATUS_FAIL)],

      [action.name]: (data, sucCallback, errCallback) =>
        (dispatch, getState) =>
          dispatch({
            [CALL_API]: {
              types: [
                getAction(actionPrefix, action.name, defines.ACTION_STATUS_LOAD),
                getAction(actionPrefix, action.name, defines.ACTION_STATUS_SUCCESS),
                getAction(actionPrefix, action.name, defines.ACTION_STATUS_FAIL)
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
      [getAction(actionPrefix, action.name)]:
        getAction(actionPrefix, action.name),

      [action.name]: data => ({
        type: getAction(actionPrefix, action.name),
        data
      })
    })
  )(actions);

export default (actionPrefix, actions) => {
  const result = {};
  forEach(action =>
    Object.assign(result, action)
  )(actionList(actionPrefix, actions));
  return result;
};
