const LOGIN_PAGE = "SingIn/LOGIN_PAGE"
const REMEMBER_ME = "SingIn/REMEMBER_ME"
const CHANGE_EMAIL = "SingIn/CHANGE_EMAIL"
const CHANGE_PASSWORD = "SingIn/CHANGE_PASSWORD"

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


export interface IUser {
    email: string,
    password: string,
    rememberMe: boolean
}

const InitialState: IUser = {
    email: "email",
    password: "pfff",
    rememberMe: true
};

type IActions = ISignInActions
    | IRememberMe
    | IChangeEmail
    | IChangePassword

export const SignInReducer = (state = InitialState, action: IActions ) => {
    switch (action.type) {
        case LOGIN_PAGE: {
            return {
                ...state
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

export const ChangePassword= (password: string): IChangePassword => ({
    type: CHANGE_PASSWORD,
    password
})