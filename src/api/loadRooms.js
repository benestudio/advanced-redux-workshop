import delay from './delay';

// we are Charlie
export default async () => {
  await delay(1000);
  return [
    {
        id: '1',
        participants: ['Alice', 'Charlie'],
    },
    {
        id: '2',
        participants: ['Bob', 'Charlie'],
    },
    {
        id: '3',
        participants: ['Alice', 'Bob', 'Charlie'],
    },
  ];
}
