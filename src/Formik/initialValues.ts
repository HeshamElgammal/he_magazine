export const login_initial_values = {
    email: '',
    password: '',
};
export const verify_initial_values = {
    email: '',
};
export const verify_otp_initial_values = {
    otp: '',
};
export const reset_password = {
    password_confirmation: '',
    password: '',
};

export const Register1_initial_values = {
    email: '',
    mobile: '',
    password: '',
    password_confirmation: '',
    country_code:'EG'
};


export const Complete_profile_initial_values = {
    photo: null,
    fullName: '',
    dateOfBirth: {
        day: 5,
        month: 3,
        year: 2023
    },
    country: null,
    city: null,
    gender: 'Male',
    address: '',
};
export const Edit_profile_initial_values = {  
    fullName: '',
    mobile: '',
    password: '',
    password_confirmation: '',
    dateOfBirth: {
        day: 3,
        month: 3,
        year: 2023
    },
    country: null,
    city: null,
    gender: 'Male',
    address: '',
    country_code:"EG"

};

export const StatusIdentifyValues = {
    one: "",
    two: "",
    three: "",
    four: "",
    five: ""
}
export const MedicalValues = {
    one: "",
    two: "",
    three: "",
    four: "",
    five: ""
}


export const AttendeesValues = {
    number: { id: 1, name: "1" },
    attendees: [{
        name: "",
        phone: ""
    },]
}