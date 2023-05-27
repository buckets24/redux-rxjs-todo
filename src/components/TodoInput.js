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

const TodoInput = () => {
  const classes = useStyles();
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    if (text !== "") {
      dispatch(addTodo(text));
      setText("");
    }
    event.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        className={classes.textbox}
        size="small"
        variant="outlined"
        label="Add a todo item"
        name="todo"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <Button color="primary" variant="contained" onClick={handleSubmit}>
        Add Item
      </Button>
    </form>
  );
};

export default TodoInput;
