/**
* @Author: SplendourHui
* @Date:   2016-05-09 15:32
* @Last modified by:   SplendourHui
* @Last modified time: 2016-09-08 17:34
*/

export const SHOW_SUCCESS_MSG = 'SHOW_SUCCESS_MSG';
export const SHOW_ERROR_MSG = 'SHOW_ERROR_MSG';
export const HIDE_SUCCESS_MESSAGE = 'HIDE_SUCCESS_MESSAGE';
export const HIDE_ERROR_MESSAGE = 'HIDE_ERROR_MESSAGE';

exports.showSuccessMessage = msg => ({
  type: SHOW_SUCCESS_MSG,
  sucMsg: msg
});

exports.showErrorMessage = msg => ({
  type: SHOW_ERROR_MSG,
  errMsg: msg
});

exports.hideSuccessMessage = () => ({
  type: HIDE_SUCCESS_MESSAGE
});

exports.hideErrorMessage = () => ({
  type: HIDE_ERROR_MESSAGE
});
