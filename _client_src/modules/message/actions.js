/**
* @Author: SplendourHui
* @Date:   2016-12-09T13:46:07+08:00
* @Last modified by:   SplendourHui
* @Last modified time: 2016-12-09T13:53:48+08:00
*/

import {NAME as messagePrefix} from './constants';
import generator from '../action_generator';

export const messageActionConfigs = [
  {
    name: 'showToast'
  },
  {
    name: 'hideToast'
  },
  {
    name: 'showNotification'
  },
  {
    name: 'hideNotification'
  }
];

export default generator(messagePrefix, messageActionConfigs);
