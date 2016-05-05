/**
 * @Author: SplendourHui
 * @Date:   2016-05-05 20:06
* @Last modified by:   SplendourHui
* @Last modified time: 2016-05-05 20:21
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
