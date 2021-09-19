import React from "react";
import { CssBaseline, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./Title";
import Card from "../Card";
import InputContainer from "../Input/InputContainer";
import { Draggable, Droppable } from "react-beautiful-dnd";

const useStyle = makeStyles((theme) => ({
  root: {
    width: '300px',
    backgroundColor: '#EBECF0',
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
    paddingTop: '5px',
    paddingBottom: '5px'
  },
  cardContainer: {
    marginTop: theme.spacing(4)
  }
}));

export default function List({list, index}) {
  const classes = useStyle();
  return (
    <Draggable draggableId={list.id} index={index}>
      {
        (provided) => (
          <div ref={provided.innerRef} {...provided.dragHandleProps}>
            <Paper className={classes.root} {...provided.draggableProps}>
              <CssBaseline/>
              <Title title={list.title} listId={list.id} />
              <Droppable droppableId={list.id}>
              {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps} className={classes.cardContainer}>
                    {
                      list.cards.map((card, index) => (
                        <Card card={card} key={card.id} index={index} />
                      ))
                    }
                    {provided.placeholder}
                  </div>
                )
              }
              </Droppable>
              <InputContainer listId={list.id} type='card' />
            </Paper>
          </div>
        )
      }
    </Draggable>
  )
}