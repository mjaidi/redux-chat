import React from 'react';
import Emojify from 'react-emojione';

const Message = (props) => {
  return (
    <div className="message">
      <h3 style={{ color: `${stringToColour(props.message.author)}` }}> {props.message.author} - <span className="message-time">{props.message.created_at.substr(11, 8)}</span></h3>
      <Emojify>
        <p>{props.message.content}</p>
      </Emojify>
    </div>
  );
}

export default Message;

var stringToColour = function(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var colour = '#';
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xFF;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
}
