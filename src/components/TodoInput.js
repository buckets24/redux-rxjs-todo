import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/index";
import { Button, TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    paddingTop: theme.spacing(3)
  },
  textbox: {
    paddingRight: theme.spacing(1)
  }
}));

const TodoInput = ({ type = "create", action = (text) => addTodo(text), initialValue = "" }) => {
  const classes = useStyles();
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const isCreating = type === "create"
  const buttonLabel = isCreating ? 'Add Item' : 'Update Item'
  const inputPlaceholder = `${isCreating ? 'Add a todo item' : ''}`

  const handleSubmit = (event) => {
    if (text !== "") {
      setText("");
      dispatch(action(text))
    }
    event.preventDefault();
  };

  React.useEffect(() => {
    setText(initialValue)
  }, [initialValue])

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        className={classes.textbox}
        size="small"
        variant="outlined"
        label={inputPlaceholder}
        name="todo"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <Button color="primary" variant="contained" onClick={handleSubmit}>
        {buttonLabel}
      </Button>
    </form>
  );
};

export default TodoInput;
