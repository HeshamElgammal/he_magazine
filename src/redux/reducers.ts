
import { combineReducers } from "@reduxjs/toolkit";
import loadingSlice from "./_loading";
import Auth from "./auth";
import App from "./app";
import tokenReducer from "./tokens/reducer";

const combineReducer = combineReducers({
    _loading: loadingSlice.reducer,
    tokens: tokenReducer,
    [Auth.slice.name]: Auth.slice.reducer,
    [App.slice.name]: App.slice.reducer,
})

export default combineReducer