/**
* @Author: SplendourHui
* @Date:   2016-05-09 15:32
* @Last modified by:   SplendourHui
* @Last modified time: 2016-09-08 17:33
*/

import React from 'react';
import ReactDom from 'react-dom';

import Root from './containers/Root';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDom.render(
  <Root store={store}/>, document.getElementById('app'));
