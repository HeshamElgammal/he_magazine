
import { combineReducers } from "@reduxjs/toolkit";
import loadingSlice from "./_loading";
import User from "./User";

const combineReducer = combineReducers({
    _loading: loadingSlice.reducer,
    [User.slice.name]: User.slice.reducer,
})

export default combineReducer