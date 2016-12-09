/**
* @Author: SplendourHui
* @Date:   2016-12-09T11:17:28+08:00
* @Last modified by:   SplendourHui
* @Last modified time: 2016-12-09T11:43:22+08:00
*/

import {createSelector, createStructuredSelector} from 'reselect';
import _ from 'lodash';
import {NAME} from './constants';

export const getAll = state => state[NAME];

export const getTestStates = createStructuredSelector({
  globalLoading: _.compose(common =>
    common.globalLoading
  , getAll)
});
