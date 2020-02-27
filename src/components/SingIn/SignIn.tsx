import React, {ChangeEvent, MouseEvent, useState} from 'react';
import {connect} from "react-redux";
import {RootState} from "../../redux/store";
import {ChangeEmail, ChangePassword, changeStatus, IUser, login, Status} from "../../redux/SignInReducer";
import {FORGOT_PATH, PROFILE_PATH, REGISTER_PATH} from "../Header/Routes";
import {NavLink, Redirect} from "react-router-dom";
import InputEmail from "../InputEmail/InputEmail";
import style from "../Forgot/Forgot.module.css";


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

    const [valid, SetValidet] = useState(false)
    const [invalid, SetInvalid] = useState(false)

    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeStatus(e.currentTarget.checked)
    }

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        props.ChangePassword(e.currentTarget.value)
        let email = e.currentTarget.value
        let pattern = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,}$"
        if (email.match(pattern)) {
            SetValidet(true)
            SetInvalid(false)
        } else {
            SetValidet(false)
            SetInvalid(true)
        }
        if (email === "" || null) {
            SetInvalid(false)
        }

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
                <InputEmail SetValue={props.ChangeEmail} email={props.data.email} />
            </div>
            <div>
                <input required={true} type="password" placeholder="Enter your password" value={props.data.password}
                       onChange={onChangePassword}/>
                <div
                    className={style.validation}>
                    {valid ? <span style={{color: "#00ff00"}}>Your Password in Valid.</span> : null}
                    {invalid ? <span style={{color: "#ff0000"}}>Please Enter Valid Password</span> : null}
                </div>
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