/**
* @Author: SplendourHui
* @Date:   2016-05-09 15:32
* @Last modified by:   SplendourHui
* @Last modified time: 2016-09-08 17:32
*/

'use strict';

const ctrl = require('./controller');

module.exports = (router) => {
  router.get('/', ctrl.index);
  router.get('/page/*', ctrl.index);
};
