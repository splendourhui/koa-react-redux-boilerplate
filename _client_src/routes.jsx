/**
* @Author: SamChan
* @Date:   2016-05-05T11:23:17+08:00
* @Last modified by:   SamChan
* @Last modified time: 2016-05-05T15:05:25+08:00
*/

import React from 'react';
import {Route, Redirect} from 'react-router';

import App from './containers/App';
import ExamplePage from './containers/ExamplePage';

export default(
  <Route path="/" component={App}>
    <Route path="page/example" component={ExamplePage}/>
  </Route>
);
