interface ISignInActions {
    type: string;
}


interface ISignInState {

}

const InitialState: ISignInState = {

};

export const SignInReducer = (state = InitialState, action: ISignInActions) => {
    switch (action.type) {

        default: {
            return state;
        }
    }
};