import { loadMessages } from '../api';

export default () => async (dispatch, getState) => {
  dispatch({
    type: 'MESSAGES_FETCH_START',
  })
  const { rooms } = getState();
  const selectedRoom = rooms.data && rooms.data.filter(room => room.isSelected)[0];
  const roomId = selectedRoom && selectedRoom.id;
  const messages = await loadMessages({ roomId });
  dispatch({
    type: 'MESSAGES_FETCH_SUCCESS',
    payload: {
      data: messages,
    },
  })
};
