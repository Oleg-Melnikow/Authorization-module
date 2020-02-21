
interface ProfileActions {
    type: string
}

interface IProfileState {

}

const InitialState: IProfileState = {

};

export const profileReducer = (state = InitialState, action: ProfileActions) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
};

