/**
* @Author: SplendourHui
* @Date:   2016-12-09T13:46:07+08:00
* @Last modified by:   SplendourHui
* @Last modified time: 2016-12-09T14:04:01+08:00
*/

import {createSelector, createStructuredSelector} from 'reselect';
import _ from 'lodash';
import {NAME} from './constants';

export const getAll = state => state[NAME];

export const getToastStates = createStructuredSelector({
  toast: _.compose(message =>
    message.toast
  , getAll)
});

export const getNotificationStates = createStructuredSelector({
  notification: _.compose(message =>
    message.notification
  , getAll)
});
