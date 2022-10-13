import "./App.css";
import SetupRouter from "./router";
import { Provider } from "react-redux"
import store, { persistor } from "../src/store"
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SetupRouter />
      </PersistGate>
    </Provider>
  );
}

export default App;
