import * as Yup from 'yup';

const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const includeDigRegExp = /([0-9]+)/;
const includeCharRegExp = /([A-z]+)/;
const EmailReg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Email must be valid')
        .trim()
        .min(8, 'Enter a valid email')
        .required('Required')
        .matches(EmailReg, 'Invalid email'),
    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 numbers'),
})

export const VerifyEmailSchema = Yup.object().shape({
    email: Yup.string()
        .email('Email must be valid')
        .trim()
        .min(8, 'Enter a valid email')
        .required('Required')
        .matches(EmailReg, 'Invalid email'),
})
export const VerifyOtpSchema = Yup.object().shape({
    otp: Yup.string()
        .required('Required')
        .min(4, 'OTP must be at least 4 numbers'),
})
export const ResetPasswordSchema = Yup.object().shape({
    password: Yup.string()
        .required('Required')
        .min(8, 'Password must be at least 8 numbers'),
    password_confirmation: Yup.string()
        .required('Required')
        .min(8, 'Password must be at least 8 numbers')
        .oneOf([Yup.ref('password'), null], 'Passwords do not match'),
})
export const Register1Schema = Yup.object().shape({

    country_code: Yup.string()
        .required('Required'),
    email: Yup.string()
        .email('Email must be valid')
        .trim()
        .min(8, 'Enter a valid Email')
        .required('Required')
        .matches(EmailReg, 'Invalid email'),
    mobile: Yup.string()
        .trim()
        .min(8, 'Enter a valid mobile number')
        .required('Required')
        .matches(phoneRegExp, 'Invalid mobile number'),
    password: Yup.string()
        .required('Required')
        .min(8, 'Password must be at least 8 numbers'),
    password_confirmation: Yup.string()
        .required('Required')
        .min(8, 'Password must be at least 8 numbers')
        .oneOf([Yup.ref('password'), null], 'Passwords do not match'),


});
export const CompleteProfileSchema = Yup.object({
    photo: Yup.object()
        .notRequired(),
    fullName: Yup.string()
        .trim()
        .required('Required')
        .min(2, 'Seems a bit short..')
        .max(25, 'Max 25 character..'),
    gender: Yup.string().trim().required("Required"),
    country: Yup.object()
        .required('Required'),
    city: Yup.object()
        .required('Required'),
    address: Yup.string().trim().required("Required"),
    dateOfBirth: Yup.object().required("Required"),
});


export const StatusIdentifySchema = Yup.object({

    one: Yup.string()
        .trim()
        .required('Required'),
    two: Yup.string().trim().required("Required"),
    three: Yup.string().trim().required("Required"),
    four: Yup.string().trim().required("Required"),
    five: Yup.string().trim().required("Required"),

});
export const MedicalSchema = Yup.object({

    one: Yup.string()
        .trim()
        .required('Required'),
    two: Yup.string().trim().required("Required"),
    three: Yup.string().trim().required("Required"),
    four: Yup.string().trim().required("Required"),
    five: Yup.string().trim().required("Required"),

});
export const AttendeesSchema = Yup.object({
    number: Yup.object().required("Required"),
    // name: Yup.string()
    //     .trim()
    //     .required('Required')
    //     .min(2, 'Seems a bit short..')
    //     .max(15, 'Max 15 character..'),
    // phone: Yup.string()
    //     .trim()
    //     .min(8, 'Enter a valid mobile number')
    //     .required('Required')
    //     .matches(phoneRegExp, 'Invalid mobile number'),

    attendees: Yup.array().of(
        Yup.object().shape({
            name: Yup.string().required('Required'),
            phone: Yup.string()
                .trim()
                .min(8, 'Enter a valid mobile number')
                .required('Required')
                .matches(phoneRegExp, 'Invalid mobile number')
        })
    )
});


export const EditProfileSchema = (pass: string) => {
    return (
        Yup.object({
            fullName: Yup.string()
                .trim()
                .required('Required')
                .min(2, 'Seems a bit short..')
                .max(25, 'Max 25 character..'),
            mobile: Yup.string()
                .trim()
                .min(8, 'Enter a valid mobile number')
                .required('Required')
                .matches(phoneRegExp, 'Invalid mobile number'),
            password: pass.length ? Yup.string()
                .required('Required')
                .min(8, 'Password must be at least 8 numbers') : Yup.string().notRequired(),
            password_confirmation: pass.length ? Yup.string()
                .required('Required')
                .min(8, 'Password must be at least 8 numbers')
                .oneOf([Yup.ref('password'), null], 'Passwords do not match') : Yup.string().notRequired(),

            gender: Yup.string().trim().required("Required"),
            country: Yup.object()
                .required('Required'),
            city: Yup.object()
                .required('Required'),
            address: Yup.string().trim().required("Required"),
            dateOfBirth: Yup.object().required("Required"),

        }))
}