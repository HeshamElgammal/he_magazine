import { api } from "../_axios"

const signUp = (body: any) => api.post('register', body)
const login = (body: any) => api.post('login', body)
const resetPassword = (body: any) => api.post('forget-password', body)
const confirmPassword = (body: any) => api.post('change-password', body)
const verifyOTP = (body: any) => api.post('verify-code', body)
const changeProfile = (body: any) => api.post('edit-profile', body)


const countries = () => api.get('countries')
const cities = (id: number) => api.get(`cities/${id}`)




const AuthAPI = {
    signUp,
    login,
    resetPassword,
    verifyOTP,
    confirmPassword,
    changeProfile,

    countries,
    cities
};

export default AuthAPI;
