import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeChannel, fetchMessages } from '../actions/index';


class Channel extends Component {
  handleClick = () => {
    this.props.changeChannel(this.props.channel);
    this.props.fetchMessages(this.props.channel);
  }

  render() {
  return (
    <div className="channel">
      <h5 onClick={this.handleClick}>{this.props.channel}</h5>
    </div>
  );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { changeChannel: changeChannel,
      fetchMessages: fetchMessages},
    dispatch
  );
}
export default connect(null, mapDispatchToProps)(Channel);
