const CHANGE_EMAIL = "Registration/CHANGE_EMAIL"
const CHANGE_PASSWORD_FIRST = "Registration/CHANGE_PASSWORD_FIRST"
const CHANGE_PASSWORD_SECOND = "Registration/CHANGE_PASSWORD_SECOND"

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

interface IRegistrationState {
    email: string,
    passwordFirst: string,
    passwordSecond: string
}

const InitialState: IRegistrationState = {
    email: "nikolas@gmail.com",
    passwordFirst: "",
    passwordSecond: ""
};

type IActions = IChangeEmail
    | IChangePasswordFirst
    | IChangePasswordSecond

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