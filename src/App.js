import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Router from "./router/index";
import { BrowserRouter } from "react-router-dom";
import NavTabsExample from "./nav";
import { store } from "./REDUX/STORE/index";
import { Provider } from "react-redux";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <NavTabsExample />
        <Router />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
