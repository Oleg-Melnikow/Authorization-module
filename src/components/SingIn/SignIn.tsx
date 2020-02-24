import React, {ChangeEvent, MouseEvent, useState} from 'react';
import {connect} from "react-redux";
import {RootState} from "../../redux/store";
import {ChangeEmail, ChangePassword, changeStatus, IUser, login, Status} from "../../redux/SignInReducer";
import {FORGOT_PATH, PROFILE_PATH, REGISTER_PATH} from "../Header/Routes";
import {NavLink, Redirect} from "react-router-dom";


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
    let [isError, setError] = useState(false)

    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeStatus(e.currentTarget.checked)
    }

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        props.ChangeEmail(e.currentTarget.value)
        if(e.currentTarget.value ===""){
            setError(true)
        } else{
            setError(false)
        }
    }

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        props.ChangePassword(e.currentTarget.value)
    }
    const logIn = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        props.Status(false)
        console.log(props.login(props.data.email, props.data.password, props.data.rememberMe))
        setDisabled(true)

    }

    if (props.data.isAuth) {
        return <Redirect to={PROFILE_PATH}/>
    }

    return (
        <div>
            <h2>Sing In</h2>
            {props.data.isStatus !== null
                ? <span>{props.data.isStatus
                    ? <span style={{color: "green"}}>Success!</span>
                    : <span style={{color: "yellow"}}>Loading...</span>}</span>
                : null}
            <div>
                <input required={true} type="email" placeholder="Enter your Email" value={props.data.email} onChange={onChangeEmail}/>
                <div>
                    {isError ? <span style={{color: "red"}}>Empty input</span> : null}
                </div>
            </div>
            <div>
                <input required={true} type="text" placeholder="Enter your password" value={props.data.password}
                       onChange={onChangePassword}/>
            </div>
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

export default connect(mapStateToProps, {changeStatus, ChangeEmail, ChangePassword, Status, login})(SignIn);