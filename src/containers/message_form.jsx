import React, { Component } from 'react';

// React magic
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createMessage, fetchMessages } from '../actions/index';

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel,
    currentUser: state.currentUser
  };
}

// This function binds actions to the props of this component
// setMessages comes from the setMessages from the actions

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage: createMessage,
      fetchMessages: fetchMessages },
    dispatch
  );
}

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.textInput = React.createRef();
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  componentDidMount() {
    this.textInput.current.focus();
  }

  handleSubmit = () => {
    this.props.createMessage(this.props.selectedChannel, this.props.currentUser, this.state.value);
    this.setState({
      value: ''
    });
    setTimeout(() => {this.props.fetchMessages(this.props.selectedChannel)}, 500);
  }

  render() {
    return (
      <div className="message-form">
        <input className="form-control"type="text" value={this.state.value} onChange={this.handleChange} ref={this.textInput} />
        <button className="btn btn-danger" onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
