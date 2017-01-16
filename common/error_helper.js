/**
* @Author: SplendourHui
* @Date:   2016-05-09 15:32
* @Last modified by:   SplendourHui
* @Last modified time: 2016-09-08 17:32
*/

'use strict';

class JsonError extends Error {
  constructor(msg, status, name, code) {
    super(msg);
    this.message = msg || 'server error';
    this.status = status || 500;
    this.name = name;
    this.code = code;
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
