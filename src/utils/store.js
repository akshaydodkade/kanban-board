const cards = [
  {
    id: 'card-1',
    title: 'Requirements'
  },
  {
    id: 'card-2',
    title: 'Low Level Design'
  },
  {
    id: 'card-3',
    title: 'High Level Design'
  },
  {
    id: 'card-4',
    title: 'Coding'
  }
];

const data = {
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'Icebox',
      cards,
    },
    'list-2': {
      id: 'list-2',
      title: 'Pending',
      cards: [],
    },
    'list-3': {
      id: 'list-3',
      title: 'WIP',
      cards: [],
    },
    'list-4': {
      id: 'list-4',
      title: 'Review',
      cards: [],
    },
    'list-5': {
      id: 'list-5',
      title: 'Done',
      cards: [],
    }
  },
  listIds: ['list-1', 'list-2', 'list-3', 'list-4', 'list-5'],
}

export default data;