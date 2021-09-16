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

export default function List() {
  const classes = useStyle();
  return (
    <div>
      <Paper className={classes.root}>
        <CssBaseline/>
        <Title />
        <Card />
        <Card />
        <Card />
        <Card />
        <InputContainer />
      </Paper>
    </div>
  )
}