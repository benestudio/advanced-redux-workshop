export default (state = {}, action) => {
  switch (action.type) {
    case 'MESSAGES_FETCH_START':
      return {
        isFetching: true,
        data: [],
      };
    case 'MESSAGES_FETCH_SUCCESS':
      return {
        isFetching: false,
        data: action.payload.data,
      };
    default:
      return state;
  }
}
