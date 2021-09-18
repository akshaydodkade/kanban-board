import React, { useState } from 'react';
import List from './components/List/List';
import store from './utils/store';
import StoreAPI from './utils/StoreAPI';
import { v4 as uuid } from 'uuid';
import InputContainer from './components/Input/InputContainer';
import { makeStyles } from "@material-ui/core/styles";
import { DragDropContext } from 'react-beautiful-dnd';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    msOverflowY: 'auto'
  }
}));

const App = () => {
  const classes = useStyle();
  const [data, setData] = useState(store);

  const addMoreCard = (title, listId) => {
    const newCardId = uuid();
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
  const addMoreList = (title) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title,
      cards: []
    }

    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList,
      },
    }
    setData(newState);
  }
  const updateListTitle = (title, listId) => {
    const list = data.lists[listId];
    list.title = title;

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    }
    setData(newState);
  }
  const onDragEnd = (result) => {
    const {destination, source, draggableId} = result;
    if (!destination) {
      return;
    }
    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];
    const draggingCard = sourceList.cards.filter((card) => card.id === draggableId)[0];

    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard); 
      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]:destinationList
        }
      }
      setData(newState);
    }
    else {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);
      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]:sourceList,
          [destinationList.id]:destinationList
        }
      }
      setData(newState);
    }
  }

  return (
    <StoreAPI.Provider value={{ addMoreCard, addMoreList, updateListTitle }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className={classes.root}>
          {
            data.listIds.map((listId) => {
              const list = data.lists[listId];
              return <List list={list} key={listId} />;
            })
          }
        </div>
      </DragDropContext>
      <InputContainer type='list' />
    </StoreAPI.Provider>
  );
}

export default App;