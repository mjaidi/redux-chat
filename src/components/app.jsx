import React from 'react';
import MessageList from '../containers/message_list';
import ChannelList from '../containers/channel_list';

const App = () => {
  return (
    <div >
      <div className="image"> <img src="https://secure.meetupstatic.com/photos/event/6/9/2/e/600_473606926.jpeg" alt="" /> </div>
      <div className="app">
        <ChannelList />
        <MessageList />
      </div>
    </div>
  );
};

export default App;
