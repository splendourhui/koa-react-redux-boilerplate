/**
* @Author: SplendourHui
* @Date:   2016-05-09 15:32
* @Last modified by:   SplendourHui
* @Last modified time: 2016-09-08 17:34
*/

export const SHOW_CONFIRM_DIALOG = 'SHOW_CONFIRM_DIALOG';
export const CLOSE_CONFIRM_DIALOG = 'CLOSE_CONFIRM_DIALOG';

exports.showConfirmDialog = (msg = '确认要执行该操作吗？', confirmType, id) => ({
  type: SHOW_CONFIRM_DIALOG,
  msg,
  confirmType,
  id
});

exports.closeConfirmDialog = () => ({
  type: CLOSE_CONFIRM_DIALOG
});
