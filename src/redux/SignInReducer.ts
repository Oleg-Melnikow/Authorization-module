import {signInAPI} from "./api";
import {RootState} from "./store";
import {Dispatch} from "redux";

const LOGIN_PAGE = "SingIn/LOGIN_PAGE"
const REMEMBER_ME = "SingIn/REMEMBER_ME"
const CHANGE_EMAIL = "SingIn/CHANGE_EMAIL"
const CHANGE_PASSWORD = "SingIn/CHANGE_PASSWORD"
const LOGIN = "SingIn/LOGIN"
const STATUS = "SingIn/STATUS"
const AUTH = "SingIn/AUTH"

interface ISignInActions {
    type: typeof LOGIN_PAGE
}

interface IRememberMe {
    type: typeof REMEMBER_ME,
    rememberMe: boolean
}

interface IChangeEmail {
    type: typeof CHANGE_EMAIL,
    email: string
}

interface IChangePassword {
    type: typeof CHANGE_PASSWORD,
    password: string
}

interface IStatus {
    type: typeof STATUS,
    isStatus: null | boolean
}

interface IAuth {
    type: typeof AUTH,
    isAuth: boolean
}

interface ILogin {
    type: typeof LOGIN,
    data: {
        email: string,
        password: string,
        rememberMe: boolean
    }
}

export interface IUser {
    email: string,
    password: string,
    rememberMe: boolean,
    isAuth: boolean
    isStatus: null | boolean
}

const InitialState: IUser = {
    email: "nikolas@gmail.com",
    password: "1234567890",
    rememberMe: true,
    isAuth: false,
    isStatus: null
};

type IActions = ISignInActions
    | IRememberMe
    | IChangeEmail
    | IChangePassword
    | ILogin
    | IStatus
    | IAuth

export const SignInReducer = (state = InitialState, action: IActions) => {
    switch (action.type) {
        case LOGIN_PAGE: {
            return {
                ...state
            }
        }
        case LOGIN:{
            return {
                ...state,
                ...action.data
            }
        }
        case REMEMBER_ME: {
            return {
                ...state,
                rememberMe: action.rememberMe
            }
        }
        case CHANGE_EMAIL: {
            return {
                ...state,
                email: action.email
            }
        }
        case CHANGE_PASSWORD: {
            return {
                ...state,
                password: action.password
            }
        }
        case STATUS: {
            return {
                ...state,
                isStatus: action.isStatus
            }
        }
        case AUTH: {
            return {
                ...state,
                isAuth: action.isAuth
            }
        }
        default: {
            return state;
        }
    }
};

export const changeStatus = (rememberMe: boolean): IRememberMe => ({
    type: REMEMBER_ME,
    rememberMe
})

export const ChangeEmail = (email: string): IChangeEmail => ({
    type: CHANGE_EMAIL,
    email
})

export const ChangePassword = (password: string): IChangePassword => ({
    type: CHANGE_PASSWORD,
    password
})

export const Status = (isStatus: null | boolean): IStatus => ({type: STATUS, isStatus})
export const Auth = (isAuth: boolean): IAuth => ({type: AUTH, isAuth})

export const Login = (email: string, password: string, rememberMe: boolean): ILogin => ({
    type: LOGIN,
    data: {email, password, rememberMe}
})

export const login = (email: string, password: string, rememberMe: boolean) =>
    async ( dispatch:Dispatch, getState: () => RootState) => {
    let value = await signInAPI.login(email, password, rememberMe)
        dispatch(Login(value.email, value.password, value.rememberMe))
        dispatch(Status(true))
        await setInterval(() => {
            dispatch(Auth(true))
        }, 1000)
        console.log(value)
}