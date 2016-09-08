/**
* @Author: SplendourHui
* @Date:   2016-05-09 15:32
* @Last modified by:   SplendourHui
* @Last modified time: 2016-09-08 17:32
*/

'use strict';

const request = require('superagent');
const _ = require('lodash');
const serverConfig = require('config')
  .get('serverConfig');

exports.send = function*(method, path, query, data, ctx, postDeal) {
  const result = yield sendRequest(method, path, query, data, ctx);
  if (postDeal) {
    postDeal.data = result;
  } else {
    ctx.body = result;
  }
};

function sendRequest(method, path, query, data, ctx) {
  return new Promise((resolve, reject) => {
    const q = request[method](`${serverConfig.url}/${path}`)
      .query(_.extend({
        username: ctx.state.info.username
      }, query || {}));

    if (data) {
      q.send(data);
    }

    if (method === 'post' || method === 'put') {
      q.type('form');
    }

    q.end((err, result) => {
      if (err) {
        ctx.logger.error(err);
        ctx.logger.error(err.response.text);
        reject(err.response.text);
      } else {
        if (result.body) {
          resolve(result.body);
        } else {
          reject(result.text);
        }
      }
    });
  });
}
