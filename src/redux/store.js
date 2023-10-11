import {configureStore} from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage/session';
// import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
const persistConfig = {
    key: 'root',
    storage,
  }
import { reducer } from "./reducers/reducer";
const persistedReducer = persistReducer(persistConfig, reducer)
const appStore = configureStore({reducer:persistedReducer , middleware:[thunk]}); 
export default appStore;

export const persistor = persistStore(appStore);