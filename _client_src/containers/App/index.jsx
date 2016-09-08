/**
* @Author: SamChan
* @Date:   2016-05-05T11:32:09+08:00
* @Last modified by:   SamChan
* @Last modified time: 2016-08-30T15:49:36+08:00
*/

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as commonActions from '../../actions/common';
import * as messageActions from '../../actions/common_message';
import * as dialogActions from '../../actions/common_dialog';

import tools from '../../utils/tools';

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

const states = [
  'loading',
  'message',
  'dialog'
];

const actions = {
  commonActions,
  messageActions,
  dialogActions
};

export default tools.connect(states, actions, App);
