import { createSlice } from "@reduxjs/toolkit";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { EntityKeys } from "src/redux/keys";


const initailValues = {
    currentUser: {
        id: null,
        token: null,
        code: undefined,
        name: null,
        email: undefined,
        country_code: undefined,
        mobile: undefined,
        avatar: undefined,
        gender: null,
        date_of_birth: null,
        country: { id: null, name: null },
        city: { id: null, name: null },
        address: null,
        status: undefined,
        status_name: undefined,
        created_at: undefined,
    },
    rememberMe: true,
    isGuest: false,
}

const slice = createSlice({
    name: EntityKeys.USERS,
    initialState: initailValues,
    reducers: {
        logout: () => initailValues,
        isGuest: (state, action) => {
            state.isGuest = action.payload
        },
        doRemember: (state, action) => {
            state.rememberMe = action.payload
        }
    },
    extraReducers(builder) {

    },
})

const User = {
    slice
}
export default User