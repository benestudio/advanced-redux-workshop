import { loadRooms } from '../api';

export default () => async dispatch => {
  dispatch({
    type: 'ROOMS_FETCH_START',
  })
  const rooms = await loadRooms();
  dispatch({
    type: 'ROOMS_FETCH_SUCCESS',
    payload: {
      data: rooms,
    },
  })
};
