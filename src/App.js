import React, { useState } from 'react';
import List from './components/List/List';
import store from './utils/store';
import StoreAPI from './utils/StoreAPI';
import { v4 as uuid } from 'uuid';

const App = () => {
  const [data, setData] = useState(store);
  const addMoreCard = (title, listId) => {
    const newCardId = uuid();
    console.log(newCardId);
    const newCard = {
      id: newCardId,
      title,
    }

    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      }
    }
    setData(newState);
  }
  return (
    <StoreAPI.Provider value={{ addMoreCard }}>
      <div>
        {
          data.listIds.map((listId) => {
            const list = data.lists[listId];
            return <List list={list} key={listId} />;
          })
        }
      </div>
    </StoreAPI.Provider>
  );
}

export default App;