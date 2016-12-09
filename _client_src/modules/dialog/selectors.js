/**
* @Author: SplendourHui
* @Date:   2016-11-17 09:40
* @Last modified by:   SplendourHui
* @Last modified time: 2016-12-09T13:51:54+08:00
*/

import {createSelector, createStructuredSelector} from 'reselect';
import _ from 'lodash';
import {NAME} from './constants';

export const getAll = state => state[NAME];
