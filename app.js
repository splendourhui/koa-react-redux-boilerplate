/**
* @Author: SplendourHui
* @Date:   2016-05-09 15:32
* @Last modified by:   SplendourHui
* @Last modified time: 2016-09-08 17:31
*/

'use strict';

const http = require('http');
const path = require('path');
const koa = require('koa');
const middlewares = require('koa-middlewares');
const logRecord = require('koa-logs-full');
const easyLogger = require('./middlewares/easy_logger');
const koaBody = require('koa-better-body');
const koaValidate = require('koa-validate');

const errorHelper = require('./common/error_helper');

let app = new koa();

/**
 * response time header
 */
app.use(middlewares.rt());

/**
 * response compress
 */
app.use(middlewares.compress({
  threshold: 2048,
  flush: require('zlib')
    .Z_SYNC_FLUSH
}));

/**
 * static file server
 */
app.use(middlewares.staticCache(path.join(__dirname, 'public')));

/**
 * koa body parser, support file body
 */
app.use(koaBody({
  patchKoa: true,
  jsonLimit: '20mb',
  formLimit: '20mb',
  multipart: true,
  extendTypes: {
    // will parse application/x-javascript type body as a JSON string
    json: ['application/x-javascript'],
    multipart: ['multipart/mixed']
  }
}));

/**
 * 日志记录中间件，可以将统一请求的日志集中到一起
 * 日志可以有 log, info, warn, error 四种类型
 * 暴露出一个全局的 koaLogger，用法：koaLogger.log('Hello logger');
 * 在请求中可以调用 this.koaLogger 来记录该请求中的日志
 */
app.use(logRecord(app, {
  logdir: path.join(__dirname, 'logs'),
  exportGlobalLogger: true
}));
app.use(easyLogger.middleware);
easyLogger.easyLogger();

/**
 * error catch
 * 如果错误类型是 JsonError，则会返回 JSON 给到客户端。一般是 Api 的错误
 * 如果错误类型是 PageError，则会根据错误码返回对应的页面。一般是页面跳转中的错误
 * 在需要抛出错误的地方执行
 *   throw new errorHelper.JsonError('no permission', 401);
 * 则错误就被下面捕捉到，在这里执行自己想要的操作即可
 */
app.use(function*(next) {
  try {
    yield next;
  } catch (e) {
    const status = e.status || 500;
    const message = e.message || 'Server error';
    this.koaLogger.error(status);
    this.koaLogger.error(message);

    // JsonError
    if (e instanceof errorHelper.JsonError) {
      this.status = status;
      this.body = {
        status,
        message
      };
      return;
    }

    // PageError
    this.status = status;
    if (status === 401) {
      // this.body = yield this.render('403.html', {'err': e});
    }
    if (status === 403) {
      // this.body = yield this.render('403.html', {'err': e});
    }
    if (status === 404) {
      // this.body = yield this.render('404.html', {'err': e});
    }
    if (status === 500) {
      // this.body = yield this.render('500.html', {'err': e});
      // koa error event
      this.app.emit('error', e, this);
    }
  }
});

/**
 * routes
 */
app.use(koaValidate());
const router = middlewares.router();
require('./routes')(router);
app.use(router.routes());

app = module.exports = http.createServer(app.callback());

const koaLogger = global.koaLogger;
if (!module.parent) {
  const port = process.argv[2] || require('config')
    .get('defaultPort');
  app.listen(port);
  koaLogger.warn(`$ Server is listening on port:${port}`);
}

process.on('exit', (code) => {
  koaLogger.warn(`$ About to exit with code:${code}`);
});
