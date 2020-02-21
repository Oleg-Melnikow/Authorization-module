interface IForgotActions {
    type: string;
}


interface IForgotState {

}

const InitialState: IForgotState = {

};

export const forgotReducer = (state = InitialState, action: IForgotActions) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
};