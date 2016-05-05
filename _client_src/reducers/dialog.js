/**
 * @Author: SplendourHui
 * @Date:   2016-05-05 20:06
* @Last modified by:   SplendourHui
* @Last modified time: 2016-05-05 20:20
 */



import {
  combineReducers
} from 'redux';

import * as dialogActions from '../actions/common_dialog';

function confirmDialog(state = {
  show: false,
  msg: '确认要执行该操作吗？',
  confirmType: 'none'
}, action) {
  switch (action.type) {
    case dialogActions.SHOW_CONFIRM_DIALOG:
      return Object.assign({}, state, {
        show: true,
        msg: action.msg,
        confirmType: action.confirmType,
        id: action.id
      });
    case dialogActions.CLOSE_CONFIRM_DIALOG:
      return Object.assign({}, state, {
        show: false
      });
    default:
      return state;
  }
}

const dialogReducer = combineReducers({
  confirmDialog
});

export default dialogReducer;
