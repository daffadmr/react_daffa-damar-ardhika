import "./App.css";
import SetupRouter from "./router";
import { Provider } from "react-redux"
import store from "../src/store"

function App() {
  return (
    <Provider store={store}>
      <SetupRouter />
    </Provider>
  );
}

export default App;
