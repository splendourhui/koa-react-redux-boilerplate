/**
* @Author: SplendourHui
* @Date:   2016-12-09T13:34:35+08:00
* @Last modified by:   SplendourHui
* @Last modified time: 2016-12-09T14:11:43+08:00
*/

import React, {Component, PropTypes} from 'react';

import tools from '../../utils/tools';

import common from '../../modules/common';
const commonActions = common.actions;
const commonSelectors = common.selectors;

import dialog from '../../modules/dialog';
const dialogActions = dialog.actions;
const dialogSelectors = dialog.selectors;

import message from '../../modules/message';
const messageActions = message.actions;
const messageSelectors = message.selectors;

export default class WithBusiness extends Component {
  constructor(props) {
    super(props);
    tools.bindMethodToThis(this, [
      'showLoading'
    ]);
  }

  componentDidMount() {
    this.showLoading();
    tools.showSucToast(this, '成功啦');
  }

  showLoading() {
    this.props.commonActions.showLoading();
  }

  render() {
    return null;
  }
}

WithBusiness.propTypes = {
  query: PropTypes.object,
  params: PropTypes.object.isRequired,
  commonActions: PropTypes.object.isRequired,
  messageActions: PropTypes.object.isRequired
};
