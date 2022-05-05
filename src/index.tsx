import { render } from "react-dom";

import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { Counter } from "./features/counter/Counter";
import { Todo } from "./features/todo/Todo";

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
    <Counter />
    <Todo />
  </Provider>,
  rootElement
);
