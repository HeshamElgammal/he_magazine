import { createSlice } from "@reduxjs/toolkit";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { EntityKeys } from "src/redux/keys";
import { RootState } from "../store";
import { initialState } from "./types";
import thunks from "./thunks";



const slice = createSlice({
    name: EntityKeys.AUTH,
    initialState: initialState,
    reducers: {
        logout: () => initialState,
        changeIsGuest: (state, action) => { state.isAuth = action.payload },
        doRemember: (state, action) => { state.rememberMe = action.payload },
        chnageTheme: (state, action) => { state.theme = action.payload },
        chnageSigned: (state, action) => { state.signUp = action.payload },
        chnageReseted: (state, action) => { state.reset = action.payload },
        chnageChanged: (state, action) => { state.changed = false },
        chnageVerified: (state, action) => { state.verified = false },
    },
    extraReducers(builder) {
        //getCountries
        builder.addCase(thunks.getCountries.fulfilled, (state, action) => {
            state.countries = action.payload?.data
        });
        builder.addCase(thunks.getCountries.rejected, (state, action: any) => {
            Toast.show({
                type: "error",
                text1: action.payload.data.message,
            })
        });

        //getCities
        builder.addCase(thunks.getCities.fulfilled, (state, action) => {
            state.cities = action.payload?.data
        });
        builder.addCase(thunks.getCities.rejected, (state, action: any) => {
            console.log(action.payload.data)
            Toast.show({
                type: "error",
                text1: action.payload.data.message,
            })
        });




        //doSignIn
        builder.addCase(thunks.doSignIn.fulfilled, (state, action) => {
            AsyncStorage.setItem('USER_TOKEN', action.payload.data?.token)
            state.currentUser = action.payload?.data
            state.isAuth = true
        });
        builder.addCase(thunks.doSignIn.rejected, (state, action: any) => {
            console.log(action.payload.data)
            Toast.show({
                type: "error",
                text1: action.payload.data.message,
            })
        });

         //doVerifyOTP
         builder.addCase(thunks.doVerifyOTP.fulfilled, (state, action) => {
            state.verified = true
        });
        builder.addCase(thunks.doVerifyOTP.rejected, (state, action: any) => {
            console.log(action.payload.data)
            Toast.show({
                type: "error",
                text1: action.payload.data.message,
            })
        });

        //doResetPassword
        builder.addCase(thunks.doResetPassword.fulfilled, (state, action) => {
            state.reset = true
        });
        builder.addCase(thunks.doResetPassword.rejected, (state, action: any) => {
            console.log(action.payload.data)
            Toast.show({
                type: "error",
                text1: action.payload.data.message,
            })
        });


        //doConfirmPassword
        builder.addCase(thunks.doConfirmPassword.fulfilled, (state, action) => {
            state.currentUser = action.payload?.data
            state.changed = true
        });
        builder.addCase(thunks.doConfirmPassword.rejected, (state, action: any) => {
            console.log(action.payload.data)
            Toast.show({
                type: "error",
                text1: action.payload.data.message,
            })
        });

        //doSignUp
        builder.addCase(thunks.doSignUp.fulfilled, (state, action) => {
            AsyncStorage.setItem('USER_TOKEN', action.payload.data?.token)
            state.currentUser = action.payload?.data
            state.isAuth = true
            Toast.show({
                type: "success",
                text1: action.payload.message,
            })
        });
        builder.addCase(thunks.doSignUp.rejected, (state, action: any) => {
            console.log(action.payload.data)
            if (action.payload.data.message == "Validation error.") {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.error,
                })
            } else {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.message,
                })
            }
        });

        //doChangeProfile
        builder.addCase(thunks.doChangeProfile.fulfilled, (state, action) => {
            state.currentUser = action.payload?.data
            state.changed = true
            Toast.show({
                type: "success",
                text1: action.payload.message,
            })
        });
        builder.addCase(thunks.doChangeProfile.rejected, (state, action: any) => {
            console.log(action.payload.data)
            if (action.payload.data.message == "Validation error.") {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.error,
                })
            } else {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.message,
                })
            }
        });

    },
})
export const selectUser = (state: RootState) => state.auth.currentUser
export const selectTheme = (state: RootState) => state.auth.theme
export const selectIsAuth = (state: RootState) => state.auth.isAuth
export const selectIsGuest = (state: RootState) => state.auth.isGuest
export const selectSigned = (state: RootState) => state.auth.signUp
export const selectVerified= (state: RootState) => state.auth.verified
export const selectReseted = (state: RootState) => state.auth.reset
export const selectChanged = (state: RootState) => state.auth.changed
export const selectCountries = (state: RootState) => state.auth.countries
export const selectCities = (state: RootState) => state.auth.cities
const Auth = {
    thunks,
    slice,
    logout: slice.actions.logout,
    chnageReseted: slice.actions.chnageReseted,
    chnageChanged: slice.actions.chnageChanged,
    chnageVerified: slice.actions.chnageVerified,
}
export default Auth