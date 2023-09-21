interface userState {
    reset: boolean;
    changed: boolean;
    signUp: boolean
    rememberMe: boolean,
    isAuth: boolean,
    verified: boolean,
    isGuest: boolean,
    theme: "light",
    currentUser: {
        id: null,
        token: null,
        name: null,
        gender: null
        date_of_birth: null
        email: undefined,
        mobile: undefined,
        country: any
        country_id: any;
        city: any
        city_id: any;
        created_at: undefined,
    },
    countries: [
        {
            id: number,
            name: string,
            created_at: any
        }
    ]
    cities: [
        {
            id: number,
            name: string,
            created_at: any
        }
    ]
}

export const initialState: userState = {
    reset: false,
    signUp: false,
    changed: false,
    rememberMe: true,
    isAuth: false,
    isGuest: true,
    verified: false,
    theme: "light",
    currentUser: {
        id: null,
        token: null,
        name: null,
        email: undefined,
        mobile: undefined,
        gender: null,
        country: null,
        country_id: null,
        city: null,
        city_id: null,
        date_of_birth: null,
        created_at: undefined,
    },
    countries: [
        {
            id: 0,
            name: "",
            created_at: ""
        }
    ],
    cities: [
        {
            id: 0,
            name: "",
            created_at: ""
        }
    ],

}