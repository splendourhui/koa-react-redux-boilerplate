<!--
@Author: SplendourHui
@Date:   2016-04-29 09:54
@Last modified by:   SplendourHui
@Last modified time: 2016-05-05 20:18
-->



## cvte-exam-admin

> 网测系统管理端


### 用法


#### 运行
```
npm start
```


#### 测试
```
npm test
```
使用 Mocha + Chai 测试框架


#### 目录结构
- common
  - error_helper: 自定义错误类型
  - message_helper: 自定义返回值，可在请求中进行类似调用：
  ```
  return messageHelper.success(this);
  ```
  - tools: 自定义工具

- middlewares
  - easy_logger.js: 润色`koa-logs-ful`模块，让打印可以传入对象，在请求中进行类似调用：
  ```
  this.koaLogger.log(content);
  ```

- public
  - css js 等静态文件

- routes: 路由、controller

- services: 将对 model 的操作放于此

- test: 测试用例，使用 Mocha + Chai

- views: 页面文件，使用 jade


#### 其他
- 参数校验: [koa-validate](https://github.com/RocksonZeta/koa-validate)

- 日志记录:
  - 全局
  ```
  global.koaLogger.log('Hello logger');
  ```
  - 请求中
  ```
  this.koaLogger.log('Hello logger in request');
  ```

- body:
  - params: `this.request.body.fields`
  - files: `this.request.body.files`
