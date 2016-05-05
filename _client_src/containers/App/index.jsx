/**
* @Author: SplendourHui
* @Date:   2016-05-05 20:06
* @Last modified by:   SplendourHui
* @Last modified time: 2016-05-05 20:21
*/



import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as commonActions from '../../actions/common';
import * as messageActions from '../../actions/common_message';
import * as dialogActions from '../../actions/common_dialog';

import './style.less';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  query: PropTypes.object,
  params: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  message: PropTypes.object.isRequired,
  dialog: PropTypes.object.isRequired,
  commonActions: PropTypes.object.isRequired,
  messageActions: PropTypes.object.isRequired,
  dialogActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {query: state.router.location.query, loading: state.loading, message: state.message, dialog: state.dialog};
}

function mapDispatchToProps(dispatch) {
  return {
    commonActions: bindActionCreators(commonActions, dispatch),
    messageActions: bindActionCreators(messageActions, dispatch),
    dialogActions: bindActionCreators(dialogActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
