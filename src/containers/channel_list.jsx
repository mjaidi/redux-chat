import React, { Component } from 'react';

// React magic
import { connect } from 'react-redux';

import Channel from '../containers/channel'

function mapStateToProps(state) {
  return {
    channels: state.channels
  };
}

class ChannelList extends Component {
  render() {
    return (
      <div className="channel-list">
        <div className="list-title">
          <h3>Available Channels</h3>
        </div>
        <ul className="list-unstyled">
        {this.props.channels.map((channel) => <Channel channel={channel} key={channel} /> ) }
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(ChannelList);
