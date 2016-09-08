/**
* @Author: SamChan
* @Date:   2016-05-05T15:02:42+08:00
* @Last modified by:   SamChan
* @Last modified time: 2016-08-30T15:53:15+08:00
*/

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as commonActions from '../../actions/common';
import * as messageActions from '../../actions/common_message';
import * as dialogActions from '../../actions/common_dialog';

import tools from '../../utils/tools';

class ExamplePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="example-page">
        <h1>示例页面</h1>
      </div>
    );
  }
}

ExamplePage.propTypes = {};

const states = [];

const actions = {
  commonActions,
  messageActions,
  dialogActions
};

function mapStateToProps(state) {
  return {query: state.router.location.query};
}

function mapDispatchToProps(dispatch) {
  return {
    commonActions: bindActionCreators(commonActions, dispatch),
    messageActions: bindActionCreators(messageActions, dispatch),
    dialogActions: bindActionCreators(dialogActions, dispatch)
  };
}

export default tools.connect(states, actions, ExamplePage);
