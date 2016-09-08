/**
* @Author: SplendourHui
* @Date:   2016-05-09 15:32
* @Last modified by:   SplendourHui
* @Last modified time: 2016-09-08 17:32
*/

exports.success = (ctx, data) =>
  Object.assign(ctx, {
    status: 200,
    body: {
      status: 200,
      msg: 'success',
      data
    }
  });

exports.unAuthorized = (ctx, status, msg) =>
  Object.assign(ctx, {
    status: 401,
    body: {
      status,
      msg: msg || 'unAuthorized',
      data: null
    }
  });

exports.notFound = ctx =>
  Object.assign(ctx, {
    status: 404,
    body: {
      status: 40004,
      msg: 'resource not found',
      data: null
    }
  });

exports.invalidParams = (ctx, status, msg) =>
  Object.assign(ctx, {
    status: 400,
    body: {
      status,
      msg: msg || 'invalid params',
      data: null
    }
  });

exports.serverError = (ctx, status, msg) =>
  Object.assign(ctx, {
    status: 500,
    body: {
      status,
      msg: msg || 'server error',
      data: null
    }
  });

exports.response = (ctx, status, msg, data) =>
  Object.assign(ctx, {
    status,
    body: {
      status,
      msg,
      data
    }
  });
