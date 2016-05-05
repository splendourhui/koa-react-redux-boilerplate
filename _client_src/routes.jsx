/**
* @Author: SplendourHui
* @Date:   2016-05-05 20:06
* @Last modified by:   SplendourHui
* @Last modified time: 2016-05-05 20:19
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
