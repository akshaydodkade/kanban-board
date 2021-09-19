import React, {useState, useContext} from 'react';
import { Button, IconButton, InputBase, Paper } from '@material-ui/core';
import { fade, makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import StoreAPI from '../../utils/StoreAPI';

const useStyle = makeStyles((theme) => ({
  card: {
    width: '280px',
    margin: theme.spacing(0, 1, 1, 1),
    paddingBottom: theme.spacing(4)
  },
  input: {
    margin: theme.spacing(1),
  },
  confirm: {
    margin: theme.spacing(0, 1, 1, 1),
  }
}))

const InputCard = ({setOpen, listId, type}) => {
  const classes = useStyle();
  const { addMoreCard, addMoreList } = useContext(StoreAPI);
  const [title, setTitle] = useState('');
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const handleBtnConfirm = () => {
    if (type === 'card') {
      addMoreCard(title, listId);
      setTitle('');
      setOpen(false);
    } else {
      addMoreList(title);
      setTitle('');
      setOpen(false);
    } 
  }
  return (
    <div>
      <div>
        <Paper className={classes.card}>
          <InputBase 
            onChange={handleOnChange}
            multiline 
            onBlur={() => setOpen(false)}
            fullWidth 
            inputProps={{ 
              className: classes.input,
            }}
            value={title}
            placeholder={
              type === 'list'?"Enter List Title":"Enter New Task"
            }
          />
        </Paper>
      </div>
      <div className={classes.confirm}>
        <Button className={classes.btnConfirm} onClick={handleBtnConfirm}  variant="contained" color="primary">
          {
            type === 'list'?"Add New List":"Add Card"
          }
        </Button>
        <IconButton onClick={() => setOpen(false)}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default InputCard;
