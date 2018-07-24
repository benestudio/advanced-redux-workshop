export default (state = {}, action) => {
  switch (action.type) {
    case 'ROOMS_FETCH_START':
      return {
        isFetching: true,
        data: [],
      };
    case 'ROOMS_FETCH_SUCCESS':
      const newRooms = {
        isFetching: false,
        data: action.payload.data,
      };
      return newRooms;
    case 'ROOMS_SELECT':
      return {
        // one level array copy
        data: state.data.map((data, index) => ({
          ...data,
          // mark desired item as selected
          isSelected: index === action.payload.index,
        })),
      };
    default:
      return state;
  }
}
