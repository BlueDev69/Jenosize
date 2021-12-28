import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import appSlice from "./appSlice";
import searchNameSlice from "./searchNameSlice";

const rootConfig = {
  key: "root",
  version: 1,
  storage: storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  app: appSlice,
  search: searchNameSlice,
});

export default persistReducer(rootConfig, rootReducer);
