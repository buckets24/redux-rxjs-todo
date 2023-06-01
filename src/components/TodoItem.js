import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo, updateTodo } from "../redux/actions/index";
import {
  Box,
  Button,
  Checkbox,
  makeStyles,
  ListItem,
  ListItemAvatar,
  Avatar,
  IconButton,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import TodoInput from "./TodoInput";

const useStyles = makeStyles((theme) => ({
  form: {
    paddingTop: theme.spacing(3)
  },
  completedText: {
    textDecoration: "line-through"
  }
}));

const TodoItem = ({ id, text, completed }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isEditing, setEditing] = React.useState(false)

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const hanldeToggle = () => {
    dispatch(toggleTodo(id));
  };

  const handleUpdateItem = () => {
    setEditing(true)
  };

  return (
    <ListItem>
      {isEditing ? (
        <Box display="flex" alignItems="flex-end">
          <TodoInput
            type="edit"
            initialValue={text}
            action={(value) => {
              setEditing(false)
              return updateTodo({ id, completed, text: value })
            }}
          />
          <Button
            color="info"
            variant="contained"
            onClick={() => setEditing(false)}
            style={{ margin: "4px" }}
          >
            Cancel
          </Button>
        </Box>
      ) : (
      <>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={text}
          className={completed ? classes.completedText : null}
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="update" onClick={handleUpdateItem}>
            <CreateIcon />
          </IconButton>
          <Checkbox edge="end" onChange={hanldeToggle} />
          <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </>)}
    </ListItem>
  );
};

export default TodoItem;
