import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Todo from "./components/Todo";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
