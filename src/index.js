import React from "react";
import ReactDOM from "react-dom";
import { Provider, useDispatch } from "react-redux";
import { Container } from "@material-ui/core";
import configureStore from "./configure-store";

import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import ProductList from "./components/productList";

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Container>
        <TodoInput />
        <TodoList />
        <ProductList />
      </Container>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
