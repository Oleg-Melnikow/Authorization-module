interface IRegistrationActions {
    type: string;
}


interface IRegistrationState {

}

const InitialState: IRegistrationState = {

};

export const registrationReducer = (state = InitialState, action: IRegistrationActions) => {
    switch (action.type) {

        default: {
            return state;
        }
    }
};