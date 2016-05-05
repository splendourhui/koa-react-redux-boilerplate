/**
* @Author: SplendourHui
* @Date:   2016-05-05 20:06
* @Last modified by:   SplendourHui
* @Last modified time: 2016-05-05 20:19
*/



import React from 'react';
import ReactDom from 'react-dom';

import Root from './containers/Root';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDom.render(
  <Root store={store}/>, document.getElementById('app'));
