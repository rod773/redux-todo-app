import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div style={{ textAlign: "center" }}>
        <h1 className="text-5xl font-bold">redux todo app</h1>
      </div>
    </Provider>
  );
}

export default App;
