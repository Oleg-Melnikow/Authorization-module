import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {forgotReducer} from "./ForgotReducer";
import {SignInReducer} from "./SignInReducer";
import {registrationReducer} from "./RegistrationReducer";
import {profileReducer} from "./ProfileReducer";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    forgot: forgotReducer,
    signIn: SignInReducer,
    registration: registrationReducer,
    profile: profileReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store

export default store;