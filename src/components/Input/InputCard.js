import React, {useState, useContext} from 'react';
import { Button, IconButton, InputBase, Paper } from '@material-ui/core';
import { fade, makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import StoreAPI from '../../utils/StoreAPI';

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

const InputCard = ({setOpen, listId}) => {
  const classes = useStyle();
  const { addMoreCard } = useContext(StoreAPI);
  const [cardTitle, setCardTitle] = useState('');
  const handleOnChange = (e) => {
    setCardTitle(e.target.value);
  };
  const handleBtnConfirm = () => {
    addMoreCard(cardTitle, listId);
    setCardTitle('');
    setOpen(false);
  }
  const handleOnBlur = () => {
    setCardTitle('');
    setOpen(false);
  }
  return (
    <div>
      <div>
        <Paper className={classes.card}>
          <InputBase 
            onChange={handleOnChange}
            multiline 
            onBlur={handleOnBlur}
            fullWidth 
            inputProps={{ 
              className: classes.input,
             }}
             value={cardTitle}
             placeholder="Enter New Task"
          />
        </Paper>
      </div>
      <div className={classes.confirm}>
        <Button className={classes.btnConfirm} onClick={handleBtnConfirm}>Add Card</Button>
        <IconButton onClick={() => setOpen(false)}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default InputCard;
