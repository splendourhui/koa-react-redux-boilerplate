/**
* @Author: SplendourHui
* @Date:   2016-09-08 10:00
* @Last modified by:   SplendourHui
* @Last modified time: 2016-12-09T13:44:31+08:00
*/

import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {reduxReactRouter} from 'redux-router';
import createLogger from 'redux-logger';
import createHistory from 'history/lib/createBrowserHistory';

import routes from '../routes';
import request from '../middlewares/request';
import rootReducer from '../rootReducer';

const middlewares = [thunk, request];
if (process.env.NODE_ENV !== `production`) {
  middlewares.push(createLogger());
}

const finalCreateStore = compose(
  applyMiddleware(...middlewares),
  reduxReactRouter({
    routes,
    createHistory
  })
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);
  return store;
}
