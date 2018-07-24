import loadMessagesAction from './loadMessagesAction';
import selectRoomAction from './selectRoomAction';

export default (index = 0) => async dispatch => {
  await dispatch(selectRoomAction(index));
  await dispatch(loadMessagesAction());
};
