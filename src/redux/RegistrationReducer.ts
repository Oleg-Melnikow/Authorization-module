import {Dispatch} from "redux";
import {RootState} from "./store";
import {registrationAPI} from "./api";


const CHANGE_EMAIL = "Registration/CHANGE_EMAIL"
const CHANGE_PASSWORD_FIRST = "Registration/CHANGE_PASSWORD_FIRST"
const CHANGE_PASSWORD_SECOND = "Registration/CHANGE_PASSWORD_SECOND"
const REGISTRATION = "Registration/REGISTRATION"
const SET_ERROR = "Registration/SET_ERROR"
const STATUS = "Registration/STATUS"

interface IChangeEmail {
    type: typeof CHANGE_EMAIL,
    email: string
}

interface IChangePasswordFirst {
    type: typeof CHANGE_PASSWORD_FIRST,
    passwordFirst: string
}

interface IChangePasswordSecond {
    type: typeof CHANGE_PASSWORD_SECOND,
    passwordSecond: string
}

interface IErrorActions {
    type: typeof SET_ERROR,
    error: string | null
}

interface IStatus {
    type: typeof STATUS,
    isStatus: null | boolean
}

interface IRegistrationSuccess {
    type: typeof REGISTRATION,
    email: string,
    password: string
}

interface IRegistrationState {
    email: string,
    passwordFirst: string,
    passwordSecond: string,
    error: string | null,
    isStatus: null | boolean
}

const InitialState: IRegistrationState = {
    email: "nikolas@gmail.com",
    passwordFirst: "",
    passwordSecond: "",
    error: null,
    isStatus: null
};

type IActions = IChangeEmail
    | IChangePasswordFirst
    | IChangePasswordSecond
    | IRegistrationSuccess
    | IErrorActions
    | IStatus

export const registrationReducer = (state = InitialState, action: IActions) => {
    switch (action.type) {
        case CHANGE_EMAIL: {
            return {
                ...state,
                email: action.email
            }
        }
        case CHANGE_PASSWORD_FIRST: {
            return {
                ...state,
                passwordFirst: action.passwordFirst
            }
        }
        case CHANGE_PASSWORD_SECOND: {
            return {
                ...state,
                passwordSecond: action.passwordSecond
            }
        }
        case REGISTRATION: {
            return {
                ...state,
                email: action.email,
                passwordFirst: action.password
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }
        case STATUS: {
            return {
                ...state,
                isStatus: action.isStatus
            }
        }
        default: {
            return state;
        }
    }
};

export const ChangeEmailReg = (email: string): IChangeEmail => ({
    type: CHANGE_EMAIL,
    email
})

export const ChangePassword = (passwordFirst: string): IChangePasswordFirst => ({
    type: CHANGE_PASSWORD_FIRST,
    passwordFirst
})

export const ChangePasswordSecond = (passwordSecond: string): IChangePasswordSecond => ({
    type: CHANGE_PASSWORD_SECOND,
    passwordSecond
})

export const RegistrationSuccess = (email: string, password: string): IRegistrationSuccess => ({
    type: REGISTRATION,
    email, password
})

export const SetErrorReg = (error: string | null): IErrorActions => ({type: SET_ERROR, error})
export const StatusReg = (isStatus: null | boolean): IStatus => ({type: STATUS, isStatus})

export const RegistrationThunk = (email: string, password: string) => async (dispatch:Dispatch, getState: () => RootState) => {
    try{
        let value = await registrationAPI.registration(email, password)
        dispatch(RegistrationSuccess(value.addedUsser.email, value.addedUsser.password))
        console.log(value)
        dispatch(StatusReg(true))
    }
    catch (e) {
        dispatch(StatusReg(true))
        dispatch(SetErrorReg(e.response.data.error))
        console.log(e.response.data.error)
    }
}