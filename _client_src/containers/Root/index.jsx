/**
* @Author: SamChan
* @Date:   2016-05-05T16:17:29+08:00
* @Last modified by:   SamChan
* @Last modified time: 2016-05-05T16:35:36+08:00
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
