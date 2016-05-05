/**
* @Author: SplendourHui
* @Date:   2016-05-05 20:06
* @Last modified by:   SplendourHui
* @Last modified time: 2016-05-05 20:20
*/



import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as commonActions from '../../actions/common';
import * as messageActions from '../../actions/common_message';
import * as dialogActions from '../../actions/common_dialog';

class FeedbackDetailPage extends Component {
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

FeedbackDetailPage.propTypes = {};

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

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackDetailPage);
