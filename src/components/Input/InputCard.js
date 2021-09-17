import React from 'react';
import { Button, IconButton, InputBase, Paper } from '@material-ui/core';
import { fade, makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";

const useStyle = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(0, 1, 1, 1),
    paddingBottom: theme.spacing(4)
  },
  input: {
    margin: theme.spacing(1),
  },
  btnConfirm: {
    background: '#5AAC44',
    color: '#fff',
    '&:hover': {
      background: fade('#5AAC44', 0.75),
    }
  },
  confirm: {
    margin: theme.spacing(0, 1, 1, 1),
  }
}))

const InputCard = ({setOpen}) => {
  const classes = useStyle();
  return (
    <div>
      <div>
        <Paper className={classes.card}>
          <InputBase 
            multiline 
            onBlur={() => setOpen(false)}
            fullWidth 
            inputProps={{ 
              className: classes.input,
             }}
             placeholder="Enter New Task"
          />
        </Paper>
      </div>
      <div className={classes.confirm}>
        <Button className={classes.btnConfirm} onClick={() => setOpen(false)}>Add Card</Button>
        <IconButton onClick={() => setOpen(false)}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default InputCard;
