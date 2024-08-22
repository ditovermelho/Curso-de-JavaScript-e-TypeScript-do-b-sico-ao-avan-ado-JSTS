import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";


import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";
import persistedReducers from "./modules/reduxPersist";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducers(rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
