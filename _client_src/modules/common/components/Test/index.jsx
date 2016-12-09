/**
* @Author: SplendourHui
* @Date:   2016-12-09T11:17:28+08:00
* @Last modified by:   SplendourHui
* @Last modified time: 2016-12-09T13:26:47+08:00
*/

import React, {Component, PropTypes} from 'react';
import {createStructuredSelector} from 'reselect';

import common from '../../';
const commonSelectors = common.selectors;
const commonActions = common.actions;

import tools from '../../../../utils/tools';

const handleShow = (showLoading) => () => {
  showLoading();
};

const handleHide = (hideLoading) => () => {
  hideLoading();
};

const Test = ({
  states, commonActions
}) => (
  <div>
    globalLoading state: {JSON.stringify(states.globalLoading)}
    <div>
      <button onClick={handleShow(commonActions.showLoading)}>Show loading</button>
      <button onClick={handleHide(commonActions.hideLoading)}>Hide loading</button>
    </div>
  </div>
);

Test.propTypes = {
  states: PropTypes.object.isRequired,
  commonActions: PropTypes.object.isRequired
};

export default tools.wuliConnect(createStructuredSelector({
  states: commonSelectors.getTestStates
}), {
  commonActions
}, Test);
