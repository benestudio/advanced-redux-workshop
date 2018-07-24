import delay from './delay';

// we are Charlie
export default async ({ roomId }) => {
  await delay(1000);
  return [
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
    {
      id: '3',
      sender: 'Alice',
      message: 'Hi Bob!',
      created: '1532432501308',
    },
    {
      id: '4',
      sender: 'Bob',
      message: 'Hi Alice!',
      created: '1532432812345',
    }
  ];
}
