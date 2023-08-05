import { Action, configureStore, getDefaultMiddleware, ThunkAction,combineReducers } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import reducer from "./reducers"
import initAxios from "./_axios";


import { createStore,legacy_createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import thunk from 'redux-thunk';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { EntityKeys } from "./keys";
import loadingSlice from "./_loading";
import User from "./User";


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [ EntityKeys.USERS],
  blacklist: ['_loading']
}

let persistedReducer = persistReducer(persistConfig, reducer)
// export const store = configureStore({
//     reducer: persistedReducer,
//     middleware: getDefaultMiddleware => getDefaultMiddleware({
//         serializableCheck: false,
//         immutableCheck: false,
//     })
// })


export const Store = () => {
  let store = legacy_createStore(persistedReducer, applyMiddleware(thunk));
  let persistor = persistStore(store);
  return { store, persistor };
};


initAxios(Store);

export type RootState = ReturnType<typeof reducer>
export const useAppDispatch = () => useDispatch();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type TStore = typeof Store;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
