/**
 * @Author: SplendourHui
 * @Date:   2016-04-29 09:54
* @Last modified by:   SplendourHui
* @Last modified time: 2016-05-05 20:18
 */



'use strict';

const ctrl = require('./controller');

module.exports = (router) => {
  router.get('/', ctrl.index);
  router.get('/page/*', ctrl.index);
};
