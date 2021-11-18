import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import Reducers from "./reducers";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["usuarios"],
};

const persist = persistReducer(persistConfig, Reducers);
const store = createStore(persist);
const persistor = persistStore(store);

export { store, persistor };