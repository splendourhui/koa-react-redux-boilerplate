/**
* @Author: SplendourHui
* @Date:   2016-05-09 15:32
* @Last modified by:   SplendourHui
* @Last modified time: 2016-12-09T14:11:19+08:00
*/

import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const mapStateToProps = states =>
  state => {
    const result = {
      query: state.router.location.query
    };
    states.forEach(item => Object.assign(result, {
      [item]: state[item]
    }));
    return result;
  };

const mapDispatchToProps = actions =>
  dispatch => {
    const result = {};
    Object.keys(actions).forEach(item => Object.assign(result, {
      [item]: bindActionCreators(actions[item], dispatch)
    }));
    return result;
  };




export default {

  isIE8: () => window.navigator.userAgent.indexOf('MSIE 8.0') >= 0,

  isIE9: () => window.navigator.userAgent.indexOf('MSIE 9.0') >= 0,

  getCookie: name => {
    const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    const arr = document.cookie.match(reg);
    if (arr) {
      return unescape(arr[2]);
    } else {
      return null;
    }
  },


  // bind methods to contex so you will not write too much `.bind(this)`
  bindMethodToThis: (context, methods) => methods.forEach(m =>
    context[m] = context[m].bind(context)),

  connect: (states, actions, container) =>
    connect(mapStateToProps(states), mapDispatchToProps(actions))(container),

  wuliConnect: (selector, actions, container) =>
    connect(selector, mapDispatchToProps(actions))(container),

  showSucToast: (ctx, sucMsg) => {
    ctx.props.messageActions.hideToast();
    ctx.props.messageActions.showToast({
      msgType: 'success',
      msg: sucMsg || '操作成功',
      key: new Date().getTime(),
      hold: 5
    });
  },

  showErrToast: (ctx, errMsg) => {
    ctx.props.messageActions.hideToast();
    ctx.props.messageActions.showToast({
      msgType: 'error',
      msg: errMsg || '操作失败',
      key: new Date().getTime(),
      hold: 5
    });
  }
};
