import React from "react";
import { NetInfo, Alert } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "../reducers";
import App from "./App";

import "./ReactotronConfig";
import Reactotron from "reactotron-react-native";

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";

const middleware = [thunkMiddleware];
let store = {};

if (__DEV__) {
  store = Reactotron.createStore(
    reducers,
    compose(applyMiddleware(...middleware))
  );
} else {
  store = compose(applyMiddleware(...middleware))(createStore)(reducers);
}

export { store };

let persistor = persistStore(store);
import RNRestart from "react-native-restart";
import { setJSExceptionHandler } from "react-native-exception-handler";

const errorHandler = (e, isFatal) => {
  if (isFatal) {
    Alert.alert("Unexpected error occurred",
      `
                  Error: ${isFatal ? "Fatal:" : ""} ${e.name} ${e.message}
                  We will need to restart the app.`,
      [{ text: "Restart", onPress: () => RNRestart.Restart() }]
    )
  } else {
    console.log(e);
  }
};

setJSExceptionHandler(errorHandler);

global.isConnected = true;

class Root extends React.Component {
  componentWillMount() {
    NetInfo.addEventListener("connectionChange", connectionInfo => {
      if (
        connectionInfo.type === "wifi" ||
        connectionInfo.type === "cellular"
      ) {
        global.isConnected = true;
        //Sync.requestSync();
      } else {
        global.isConnected = false;
      }
    });
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    );
  }
}

module.exports = Root;
