import Reactotron from "reactotron-react-native";
import { reactotronRedux as reduxPlugin } from "reactotron-redux";

console.disableYellowBox = false;

Reactotron.configure({ name: "ChatigyMobile" });

Reactotron.useReactNative({
  asyncStorage: {}
});

Reactotron.use(reduxPlugin());

if (__DEV__) {
  Reactotron.configure({ host: "192.168.1.4" }).connect();
  Reactotron.clear();
}

console.tron = Reactotron;
