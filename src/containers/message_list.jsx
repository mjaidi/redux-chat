import React, { Component } from 'react';
import Message from '../components/message';


// React magic
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}


class MessageList extends Component {
  render() {
    return (
      <div>
        {this.props.messages.map((message) => <Message message={message} key={message.created_at} />) }
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(MessageList);
