export default (index = 0) => async (dispatch) => {
  dispatch({
    type: 'ROOMS_SELECT',
    payload: {
      index,
    },
  });
};
