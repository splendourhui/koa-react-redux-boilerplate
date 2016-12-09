/**
* @Author: SplendourHui
* @Date:   2016-12-09T13:46:07+08:00
* @Last modified by:   SplendourHui
* @Last modified time: 2016-12-09T13:48:36+08:00
*/

import {NAME as dialogPrefix} from './constants';
import generator from '../action_generator';
import defines from '../defines';

export const dialogActions = [
  {
    name: 'showConfirmDialog'
  },
  {
    name: 'hideConfirmDialog'
  },
  {
    name: 'showConfirmLoading'
  },
  {
    name: 'hideConfirmLoading'
  }
];

export default generator(dialogPrefix, dialogActions);
