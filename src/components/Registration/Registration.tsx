import React, {MouseEvent, useState} from 'react';
import {NavLink} from "react-router-dom";
import style from "../Forgot/Forgot.module.css";
import {SIGN_IN_PATH} from "../Header/Routes";
import {connect} from "react-redux";
import {RootState} from "../../redux/store";
import {
    ChangeEmailReg,
    ChangePassword,
    ChangePasswordSecond,
    RegistrationThunk,
    StatusReg
} from "../../redux/RegistrationReducer";
import InputEmail from "../InputEmail/InputEmail";
import InputPassword from "../InputPassword/InputPassword";

interface IMapStateToProps {
    email: string,
    passwordFirst: string
    passwordSecond: string
    error: string | null
    isStatus: boolean | null
}

interface IMapDispatchToProps {
    ChangeEmailReg: (e: string) => void
    ChangePassword: (e: string) => void
    ChangePasswordSecond: (e: string) => void
    RegistrationThunk: (email: string, password: string) => void
    StatusReg: (e: boolean) => void
}

const Registration = (props: IMapStateToProps & IMapDispatchToProps) => {

    let [isDisabled, setDisabled] = useState(false)
    let [error, setError] = useState(false)

    const register = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setError(false)
        if(props.passwordFirst === props.passwordSecond){
            props.StatusReg(false)
            console.log(props.RegistrationThunk(props.email, props.passwordFirst))
            setDisabled(true)
        } else {
            setError(true)
        }

    }

    return (
        <div>
            <h2>Registration</h2>
            {error ? "Password not valid! must be more than 7 characters..." : null}
            {props.isStatus !== null
                ? <span>{props.isStatus
                    ?  props.error ? <span style={{color: "red"}}>{props.error}</span> : <span style={{color: "green"}}>Success!</span>
                    : <span style={{color: "yellow"}}>Loading...</span>}</span>
                : null}
            <InputEmail SetValue={props.ChangeEmailReg} email={props.email}/>
            <InputPassword password={props.passwordFirst} ChangePassword={props.ChangePassword}/>
            <InputPassword password={props.passwordSecond} ChangePassword={props.ChangePasswordSecond}/>
            <button disabled={isDisabled}  onClick={register}>Registration</button>
            <div>
                <NavLink className={style.link} to={SIGN_IN_PATH}>Sign In</NavLink>
            </div>
        </div>
    );
};

const mapStateToProps = (state: RootState): IMapStateToProps => ({
    email: state.registration.email,
    passwordFirst: state.registration.passwordFirst,
    passwordSecond: state.registration.passwordSecond,
    error: state.registration.error,
    isStatus: state.registration.isStatus
})

export default connect(mapStateToProps, {ChangeEmailReg, ChangePassword, ChangePasswordSecond, RegistrationThunk, StatusReg})(Registration);