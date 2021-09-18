import React, { useState, useContext } from 'react';
import { InputBase, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import StoreAPI from '../../utils/StoreAPI';

const useStyle = makeStyles((theme) => ({
  editableTitleContainer: {
    margin: theme.spacing(1),
    display: "flex"
  },
  editableTitle: {
    flexGrow: 1,
    fontSize: "1.2rem",
    fontWeight: "bold"
  },
  input: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: theme.spacing(1),
    '&:focus': {
      background: "#ddd"
    }
  }
}));

const Title = ({title, listId}) => {
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const {updateListTitle} = useContext(StoreAPI);
  const classes = useStyle();
  const handleOnChange = (e) => {
    setNewTitle(e.target.value);
  }
  const handleOnBlur = () => {
    setOpen(false);
    updateListTitle(newTitle, listId);
  }
  return (
    <div>
      {
        open?(
          <InputBase
            onChange={handleOnChange}
            autoFocus
            value={newTitle}
            inputProps={{ 
              className: classes.input,
             }}
             fullWidth
             onBlur={handleOnBlur}
          />
        ):(
          <div className={classes.editableTitleContainer}>
            <Typography onClick={() => setOpen(!open)} className={classes.editableTitle}>{title}</Typography>
            <MoreHorizIcon />
          </div>
          )
      }
    </div>
  );
}

export default Title;
