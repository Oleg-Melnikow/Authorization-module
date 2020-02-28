import React, {ChangeEvent, MouseEvent, useState} from 'react';
import {connect} from "react-redux";
import {RootState} from "../../redux/store";
import {ChangeEmail, ChangePassword, changeStatus, IUser, login, SetError, Status} from "../../redux/SignInReducer";
import {FORGOT_PATH, PROFILE_PATH, REGISTER_PATH} from "../Header/Routes";
import {NavLink, Redirect} from "react-router-dom";
import InputEmail from "../InputEmail/InputEmail";
import InputPassword from "../InputPassword/InputPassword";



interface IMapStateToProps {
    data: IUser
}

interface IMapDispatchToProps {
    changeStatus: (e: boolean) => void
    ChangeEmail: (e: string) => void
    ChangePassword: (e: string) => void
    Status: (e: null | boolean) => void
    login: (email: string, password: string, rememberMe: boolean) => void
}

const SignIn = (props: IMapStateToProps & IMapDispatchToProps) => {

    let [isDisabled, setDisabled] = useState(false)
    let [error, setError] = useState(false)

    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeStatus(e.currentTarget.checked)
    }
    const logIn = (e: MouseEvent<HTMLButtonElement>) => {
        setError(false)
        if(props.data.password.length > 7) {
            e.preventDefault()
            props.Status(false)
            console.log(props.login(props.data.email, props.data.password, props.data.rememberMe))
            setDisabled(true)
        } else {
            setError(true)
        }
    }

    if (props.data.isAuth) {
        return <Redirect to={PROFILE_PATH}/>
    }

    return (
        <div>
            <h2>Sing In</h2>
            <div>
                {error ? "Passwords don't match!" : null}
                {props.data.isStatus !== null
                    ? <span>{props.data.isStatus
                        ?  props.data.error ? <span style={{color: "red"}}>{props.data.error}</span> : <span style={{color: "green"}}>Success!</span>
                        : <span style={{color: "yellow"}}>Loading...</span>}</span>
                    : null}
            </div>
            <div>
                <InputEmail SetValue={props.ChangeEmail} email={props.data.email}/>
            </div>

            <InputPassword password={props.data.password} ChangePassword={props.ChangePassword}/>
            <div>
                <NavLink to={FORGOT_PATH}>Forgot password?</NavLink>
            </div>
            <div>
                <input type="checkbox" checked={props.data.rememberMe}
                       onChange={onChangeStatus}/><span>Remember me</span>
            </div>
            <div>
                <button disabled={isDisabled} onClick={logIn}>Sing In</button>
            </div>
            <div>
                <NavLink to={REGISTER_PATH}>Registration</NavLink>
            </div>
        </div>
    );
};

const mapStateToProps = (state: RootState): IMapStateToProps => ({
    data: state.signIn
})

export default connect(mapStateToProps, {changeStatus, ChangeEmail, ChangePassword, Status, login, SetError})(SignIn);