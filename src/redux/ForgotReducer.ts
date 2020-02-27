import {Dispatch} from "redux";
import {RootState} from "./store";
import {forgotAPI} from "./api";

const SET_EMAIL = "Forgot/SET_EMAIL"
const SET_ERROR = "Forgot/SET_ERROR"
const STATUS = "Forgot/STATUS"

interface ISentEmailActions {
    type: typeof SET_EMAIL,
    email: string
}

interface ISentErrorActions {
    type: typeof SET_ERROR,
    error: string | null
}

interface IStatus {
    type: typeof STATUS,
    isStatus: null | boolean
}

interface IForgotState {
    email: string,
    error: string | null,
    isStatus: boolean | null
}

const InitialState: IForgotState = {
    email: "ssss@ukr.net",
    error: null,
    isStatus: null
};

type ForgotActions = ISentEmailActions
    | ISentErrorActions
    | IStatus

export const forgotReducer = (state = InitialState, action: ForgotActions) => {
    switch (action.type) {
        case SET_EMAIL: {
            return {
                ...state,
                email: action.email
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

export const SetForgot = (email: string): ISentEmailActions => ({type: SET_EMAIL, email})
export const SetError = (error: string | null): ISentErrorActions => ({type: SET_ERROR, error})
export const StatusForgot = (isStatus: null | boolean): IStatus => ({type: STATUS, isStatus})

export const ForgotThunk = (email: string) => async (dispatch:Dispatch, getState: () => RootState) => {
    try {
        let value = await forgotAPI.forgot(email)
        dispatch(SetForgot(value.email))
    }
    catch (e) {
        dispatch(StatusForgot(true))
        dispatch(SetError(e.response.data.error))
        console.log(e.response.data.error)
    }

}
