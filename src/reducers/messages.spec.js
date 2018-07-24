import messages from './messages';

describe('messages reducer', () => {
  it('is a function', () => {
    expect(messages.constructor).toBe(Function);
  })

  it('should mark fetch start correctly', () => {
    const action = { type: 'MESSAGES_FETCH_START' };
    expect(messages({}, action)).toMatchSnapshot();
  })
  it('should output messages on fetch success', () => {
    const data = [
      {
        id: '1',
        sender: 'Alice',
        message: 'Hi Bob!',
        created: '1532432201308',
      },
      {
        id: '2',
        sender: 'Bob',
        message: 'Hi Alice!',
        created: '1532432212345',
      },
    ];
    const action = {
      type: 'MESSAGES_FETCH_SUCCESS',
      payload: {
        data,
      },
    };
    expect(messages({}, action)).toMatchSnapshot();
  })
});
