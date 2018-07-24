import React, { Component } from 'react';
import { connect } from 'react-redux';

import loadRoomsAndLoadMessagesAction from '../actions/loadRoomsAndLoadMessagesAction';
import selectRoomAndLoadMessagesAction from '../actions/selectRoomAndLoadMessagesAction';

import Messages from './Messages';
import '../App.css';

class Chat extends Component {
  componentDidMount() {
    const { loadRoomsAndLoadMessagesAction } = this.props;
    loadRoomsAndLoadMessagesAction();
  }
  render() {
    const {
      rooms,
      messages,
      selectRoomAndLoadMessagesAction,
    } = this.props;
    return (
      <div>
        <h2>Chat</h2>
        <h3>Rooms (you can select one)</h3>
        <div>
          {
            rooms.isFetching && 'Loading rooms...'
          }
          {
            rooms && rooms.data && rooms.data.map(({ id, participants, isSelected }, index) => (
              <div
                key={id}
                className={isSelected ? 'selected-room' : ''}
                onClick={() => selectRoomAndLoadMessagesAction(index)}
              >
                {participants.join(', ')}
              </div>
            ))
          }
        </div>
        <div>
          <h3>Messages</h3>
          {
            messages.isFetching
            ? 'Loading messages...'
            : <Messages messages={messages.data || []} />
          }      
        </div>
        <div>
          <h3>Dummy message input</h3>
          <input name="chatMessage" placeholder="doesn't do anything :)"/>
        </div> 
      </div>
    );
  }
}

const mapStateToProps = ({ rooms, messages }) => ({
  rooms,
  messages,
});

// see also: https://blog.benestudio.co/5-ways-to-connect-redux-actions-3f56af4009c8
const mapDispatchToProps = {
  loadRoomsAndLoadMessagesAction,
  selectRoomAndLoadMessagesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
