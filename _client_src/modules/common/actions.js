/**
* @Author: SplendourHui
* @Date:   2016-12-09T11:17:27+08:00
* @Last modified by:   SplendourHui
* @Last modified time: 2016-12-09T12:19:49+08:00
*/

import {push, goBack} from 'redux-router';

import generator from '../action_generator';

import {NAME as commonPrefix} from './constants';

export const commonActionConfigs = [
  // global loading
  {
    name: 'showLoading'
  },
  {
    name: 'hideLoading'
  }
];

export default Object.assign({}, generator(commonPrefix, commonActionConfigs), {
  // jump to some page
  jumpTo: (path) =>
    (dispatch, getState) => dispatch(push(path)),
  // back to previous page
  goBack: () =>
    (dispatch, getState) => dispatch(goBack())
});
