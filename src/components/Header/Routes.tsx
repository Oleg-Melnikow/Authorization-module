import React from 'react';
import {Redirect, Route} from "react-router-dom";
import SignIn from "../SingIn/SignIn";
import Registration from "../Registration/Registration";
import Profile from "../Profile/Profile";
import ForgotContainer from "../Forgot/ForgotContainer";

export const START_PATH = '/login-register-forgot/';
export const SIGN_IN_PATH = `${START_PATH}sign-in`;
export const REGISTER_PATH = `${START_PATH}register`;
export const FORGOT_PATH = `${START_PATH}forgot`;
export const PROFILE_PATH = `${START_PATH}profile`;

const Routes = () => {
    return (
        <div>
            <Route exact path={START_PATH} render={() => <Redirect to={SIGN_IN_PATH}/>}/>
            <Route path={SIGN_IN_PATH} render={() => <SignIn/>}/>
            <Route path={REGISTER_PATH} render={() => <Registration/>}/>
            <Route path={FORGOT_PATH} render={() => <ForgotContainer/>}/>
            <Route path={PROFILE_PATH} render={() => <Profile/>}/>
        </div>
    );
};

export default Routes;