import React from "react";
import { CssBaseline, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./Title";
import Card from "../Card";
import InputContainer from "../Input/InputContainer";

const useStyle = makeStyles((theme) => ({
  root: {
    width: '300px',
    backgroundColor: '#EBECF0',
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
    paddingTop: '5px',
    paddingBottom: '5px'
  }
}));

export default function List({list}) {
  const classes = useStyle();
  return (
    <div>
      <Paper className={classes.root}>
        <CssBaseline/>
        <Title title={list.title} />
        {
          list.cards.map((card) => (
            <Card card={card} key={card.id} />
          ))
        }
        <InputContainer listId={list.id} />
      </Paper>
    </div>
  )
}