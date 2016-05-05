/**
 * @Author: SplendourHui
 * @Date:   2016-04-29 09:54
* @Last modified by:   SplendourHui
* @Last modified time: 2016-05-05 20:19
 */



'use strict';

class JsonError extends Error {
  constructor(msg, status) {
    super(msg);
    this.message = msg || 'server error';
    this.status = status || 500;
  }
}
exports.JsonError = JsonError;

class PageError extends Error {
  constructor(msg, status) {
    super(msg);
    this.message = msg || 'server error';
    this.status = status || 500;
  }
}
exports.PageError = PageError;
