/**
* @Author: SplendourHui
* @Date:   2016-10-16T08:16:22+08:00
* @Last modified by:   SplendourHui
* @Last modified time: 2016-12-09T14:12:10+08:00
*/

import React, {Component, PropTypes} from 'react';
import {Provider} from 'react-redux';
import {ReduxRouter} from 'redux-router';

export default class Root extends Component {
  render() {
    const {store} = this.props;
    return (
      <Provider store={store}>
        <div>
          <ReduxRouter/>
        </div>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};
