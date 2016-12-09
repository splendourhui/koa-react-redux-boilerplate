/**
* @Author: SamChan
* @Date:   2016-05-05T15:02:42+08:00
* @Last modified by:   SplendourHui
* @Last modified time: 2016-12-09T14:05:28+08:00
*/

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import business from './business';

import common from '../../modules/common';
const commonActions = common.actions;
const commonSelectors = common.selectors;

import dialog from '../../modules/dialog';
const dialogActions = dialog.actions;
const dialogSelectors = dialog.selectors;

import message from '../../modules/message';
const messageActions = message.actions;
const messageSelectors = message.selectors;

import tools from '../../utils/tools';

import Test from '../../modules/common/components/Test';

class ExamplePage extends business {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="example-page">
        <h1>example page</h1>
        <Test />
      </div>
    );
  }
}

ExamplePage.propTypes = {};

const actions = {
  commonActions,
  messageActions,
  dialogActions
};

export default tools.wuliConnect(createStructuredSelector({
  common: commonSelectors.getAll
}), actions, ExamplePage);
