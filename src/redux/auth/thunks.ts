import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthAPI from "./api";

const doSignUp: any = createAsyncThunk<any, any, any>(
    'auth/signUp',
    async (data: any, thunkApi: any) => {
        try {
            const response = await AuthAPI.signUp(data);
            console.log(JSON.stringify(response.data))
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)



const doSignIn: any = createAsyncThunk<any, any, any>(
    'auth/login',
    async (data: any, thunkApi: any) => {
        try {
            const response = await AuthAPI.login(data);
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)


const doResetPassword: any = createAsyncThunk<any, any, any>(
    'auth/reset',
    async (data: any, thunkApi: any) => {
        try {
            const response = await AuthAPI.resetPassword(data);
            console.log(JSON.stringify(response.data))
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

const doVerifyOTP: any = createAsyncThunk<any, any, any>(
    'auth/verifyOTP',
    async (data: any, thunkApi: any) => {
        try {
            const response = await AuthAPI.verifyOTP(data);
            // alert(JSON.stringify(response.status))
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503 ||
                response.status == 400 
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)
const doConfirmPassword: any = createAsyncThunk<any, any, any>(
    'auth/change',
    async (data: any, thunkApi: any) => {
        try {
            const response = await AuthAPI.confirmPassword(data);
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

const doChangeProfile: any = createAsyncThunk<any, any, any>(
    'auth/changeProfile',
    async (data: any, thunkApi: any) => {
        try {
            const response = await AuthAPI.changeProfile(data);
            // alert(JSON.stringify(response.data))
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

const getCountries: any = createAsyncThunk<any, any, any>(
    'auth/countries',
    async (_, thunkApi: any) => {
        try {
            const response = await AuthAPI.countries();
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

const getCities: any = createAsyncThunk<any, any, any>(
    'auth/cities',
    async (id, thunkApi: any) => {
        try {
            const response = await AuthAPI.cities(id);
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)



const thunks = {
    doSignUp,
    doSignIn,
    doResetPassword,
    doVerifyOTP,
    doConfirmPassword,
    doChangeProfile,

    getCountries,
    getCities
};

export default thunks;

