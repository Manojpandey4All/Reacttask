import "./App.css";
import React from "react";
// import { Navbar } from "./Components/Navbar";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Products } from "./Components/Products";
function App() {
  return (
    <>
      <Provider store={store}>
        {/* <Navbar /> */}
        <Products />
      </Provider>
    </>
  );
}

export default App;
