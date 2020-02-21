const LOGIN_PAGE = "SingIn/LOGIN_PAGE"

interface ISignInActions {
    type: typeof LOGIN_PAGE
}


export interface IUser {
    email: string,
    password: string,
    rememberMe: boolean
}

const InitialState: IUser = {
    email: "e",
    password: "p",
    rememberMe: true
};

export const SignInReducer = (state = InitialState, action: ISignInActions) => {
    switch (action.type) {
        case LOGIN_PAGE: {
            return {
                ...state
            }
        }

        default: {
            return state;
        }
    }
};