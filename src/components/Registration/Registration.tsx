import React from 'react';
import {NavLink} from "react-router-dom";
import style from "../Forgot/Forgot.module.css";
import {SIGN_IN_PATH} from "../Header/Routes";
import {connect} from "react-redux";
import {RootState} from "../../redux/store";
import {ChangeEmailReg, ChangePassword, ChangePasswordSecond} from "../../redux/RegistrationReducer";
import InputEmail from "../InputEmail/InputEmail";
import InputPassword from "../InputPassword/InputPassword";

interface IMapStateToProps {
    email: string,
    passwordFirst: string
    passwordSecond: string
}

interface IMapDispatchToProps {
    ChangeEmailReg: (e: string) => void
    ChangePassword: (e: string) => void
    ChangePasswordSecond: (e: string) => void
}

const Registration = (props: IMapStateToProps & IMapDispatchToProps) => {
    return (
        <div>
            <h2>Registration</h2>
            <InputEmail SetValue={props.ChangeEmailReg} email={props.email}/>
            <InputPassword password={props.passwordFirst} ChangePassword={props.ChangePassword}/>
            <InputPassword password={props.passwordSecond} ChangePassword={props.ChangePasswordSecond}/>
            <button>Registration</button>
            <div>
                <NavLink className={style.link} to={SIGN_IN_PATH}>Sign In</NavLink>
            </div>
        </div>
    );
};

const mapStateToProps = (state: RootState): IMapStateToProps => ({
    email: state.registration.email,
    passwordFirst: state.registration.passwordFirst,
    passwordSecond: state.registration.passwordSecond
})

export default connect(mapStateToProps, {ChangeEmailReg, ChangePassword, ChangePasswordSecond})(Registration);