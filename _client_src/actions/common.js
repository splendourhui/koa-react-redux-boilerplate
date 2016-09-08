/**
* @Author: SplendourHui
* @Date:   2016-05-09 15:32
* @Last modified by:   SplendourHui
* @Last modified time: 2016-09-08 17:34
*/

import {
  pushState
} from 'redux-router';

export const SHOW_LOADING = 'SHOW_LOADING';
export const HIDE_LOADING = 'HIDE_LOADING';

exports.showLoading = msg => ({
  type: SHOW_LOADING,
  msg: msg || 'loading'
});

exports.hideLoading = () => ({
  type: HIDE_LOADING
});

exports.jumpTo = (path, name) =>
  (dispatch, getState) => dispatch(pushState(null, path));
