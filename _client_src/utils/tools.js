/**
* @Author: SplendourHui
* @Date:   2016-05-09 15:32
* @Last modified by:   SplendourHui
* @Last modified time: 2016-09-08 17:35
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

  mapStateToProps,

  mapDispatchToProps,

  connect: (states, actions, container) =>
    connect(mapStateToProps(states), mapDispatchToProps(actions))(container)
};
