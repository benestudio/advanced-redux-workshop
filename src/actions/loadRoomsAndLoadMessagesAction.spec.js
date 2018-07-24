jest.mock('../api/loadMessages');
jest.mock('../api/loadRooms');

import loadRoomsAndLoadMessagesAction from './loadRoomsAndLoadMessagesAction';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('loadRoomsAndLoadMessagesAction', () => {
  it('is a function', () => {
    expect(loadRoomsAndLoadMessagesAction.constructor).toBe(Function);
  });

  it('should invoke actions correctly', () => {
    const store = mockStore({ rooms: {}, messages: {} });

    return store.dispatch(loadRoomsAndLoadMessagesAction(0)).then(() => {
      // return of async actions
      expect(store.getActions()).toMatchSnapshot();
    })
  });
});
