import * as Yup from 'yup';

const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const includeDigRegExp = /([0-9]+)/;
const includeCharRegExp = /([A-z]+)/;
const EmailReg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const LoginSchema = Yup.object().shape({
    Email: Yup.string().email('Email must be valid').trim().min(8, 'Enter a valid email').required('Email is required').matches(EmailReg, 'Invalid email'),
    Password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 numbers'),
})

export const ResetSchema = Yup.object().shape({
    Email: Yup.string().email('Email must be valid').trim().min(8, 'Enter a valid email').required('Email is required').matches(EmailReg, 'Invalid email'),
})

export const OTPSchema = Yup.object().shape({
    EnterOTPcode: Yup.string().trim().min(4, 'Enter a valid OTP').required('OTP is required')
})

export const changePasswordSchema = Yup.object().shape({
    Newpassword: Yup.string().required('New password is required').min(8, 'New password must be at least 8 numbers'),
    Confirmpassword: Yup.string().required('Confirm password is Required').min(8, 'Confirm password must be at least 8 numbers').oneOf([Yup.ref('Newpassword'), null], 'Passwords do not match'),
})

export const SignupSchema = Yup.object().shape({
    Email: Yup.string().email('Email must be valid').trim().min(8, 'Enter a valid email').required('Email is required').matches(EmailReg, 'Invalid email'),
    Password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 numbers'),
    Confirmpassword: Yup.string().required('Confirm password is Required').min(8, 'Confirm password must be at least 8 numbers').oneOf([Yup.ref('Password'), null], 'Passwords do not match'),
    Mobilenumber: Yup.string().trim().min(8, 'Enter a valid mobile number').required('Mobile number is required').matches(phoneRegExp, 'Invalid mobile number'),
})

export const EditProfileSchema = Yup.object().shape({
    Name: Yup.string().required('Name is required'),
    Mobilenumber: Yup.string().trim().min(8, 'Enter a valid mobile number').required('Mobile number is required').matches(phoneRegExp, 'Invalid mobile number'),
    Dateofbirth: Yup.string().required('Date of birth is required'),
    Country: Yup.object().required('Country is Required'),
    City: Yup.object().required('City is required'),
})

export const CompleteSignupSchema = Yup.object().shape({
    Fullname: Yup.string().trim().required('Fullname is required'),
    Dateofbirth: Yup.string().required('Date of birth is required'),
    Country: Yup.object().required('Country is Required'),
    City: Yup.object().required('City is required'),
})