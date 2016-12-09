/**
* @Author: SplendourHui
* @Date:   2016-10-16T08:16:22+08:00
* @Last modified by:   SplendourHui
* @Last modified time: 2016-12-09T13:31:58+08:00
*/

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import common from '../../modules/common';
const commonActions = common.actions;
const commonSelectors = common.selectors;

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
  common: PropTypes.object.isRequired,
  commonActions: PropTypes.object.isRequired
};

const actions = {
  commonActions
};

export default tools.wuliConnect(createStructuredSelector({
  common: commonSelectors.getAll
}), actions, App);
