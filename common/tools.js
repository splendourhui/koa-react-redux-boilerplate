/**
 * @Author: SplendourHui
 * @Date:   2016-04-29 09:54
* @Last modified by:   SplendourHui
* @Last modified time: 2016-05-05 20:19
 */



'use strict';

const crypto = require('crypto');
const request = require('superagent');

let md5Encrypt;
let getVerifyCode;
let isArray;

exports.md5Encrypt = md5Encrypt = string => {
  if (string === null) return null;
  if (typeof (string) !== 'string') return null;
  const md5sum = crypto.createHash('md5');
  md5sum.update(string, 'utf8');
  return md5sum.digest('hex');
};

exports.getVerifyCode = getVerifyCode = strArray => {
  if (strArray === null) return null;
  if (!isArray(strArray)) return null;
  return md5Encrypt(strArray.join('').toUpperCase());
};

exports.isArray = isArray = object =>
  Object.prototype.toString.call(object) === '[object Array]';

exports.getJSONData = reqData =>
  typeof reqData === 'string' ? JSON.parse(reqData) : reqData;
