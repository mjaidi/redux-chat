import React, { Component } from 'react';

// React magic
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setMessages, fetchMessages } from '../actions/index';

// Relative Files
import Message from '../components/message';
import MessageForm from '../containers/message_form';

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

// This function binds actions to the props of this component
// setMessages comes from the setMessages from the actions
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setMessages: setMessages,
      fetchMessages: fetchMessages },
    dispatch
  );
}

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.scroll = React.createRef();
  }

  componentWillMount() {
  // TODO: dispatch an action to load flats!
  // trigger redux action setMessages which updates the reudx state store
    this.props.setMessages();

  }

  componentDidMount() {
    const intervalMessages = setInterval(() => { this.props.fetchMessages(this.props.selectedChannel) }, 1000);
    this.scroll.current.scrollTop = this.scroll.current.scrollHeight;
  }

  // componentWillUpdate() {
  //   this.scroll.current.scrollTop = this.scroll.current.scrollHeight;
  // }

  componentWillUnmount() {
    clearInterval(intervalMessages);
  }


  render() {
    return (
      <div className="message-list" >
      <div className="message-content" ref={this.scroll}>
          <div className="list-title">
              <h3>Channel: {this.props.selectedChannel}</h3>
          </div>
          <div>
            {this.props.messages.map((message) => <Message message={message} key={message.created_at} />) }
          </div>
        </div>
        <MessageForm />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
