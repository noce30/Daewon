import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/es/storage";
import { loadingReducer } from "./loading";

const config = {
  key: "root",
  storage,
  whitelist: []
};
const reducers = persistCombineReducers(config, {loading: loadingReducer});

export default reducers;
