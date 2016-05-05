/**
* @Author: SplendourHui
* @Date:   2016-05-05 20:06
* @Last modified by:   SplendourHui
* @Last modified time: 2016-05-05 20:20
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
