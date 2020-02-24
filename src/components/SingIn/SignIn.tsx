import React, {ChangeEvent, MouseEvent} from 'react';
import {connect} from "react-redux";
import {RootState} from "../../redux/store";
import {ChangeEmail, ChangePassword, changeStatus, IUser, login} from "../../redux/SignInReducer";
import {FORGOT_PATH, REGISTER_PATH} from "../Header/Routes";
import {NavLink} from "react-router-dom";


interface IMapStateToProps {
    data: IUser
}

interface IMapDispatchToProps {
    changeStatus: (e:boolean) => void
    ChangeEmail: (e: string) => void
    ChangePassword: (e:string) => void
    login: (email: string, password: string, rememberMe: boolean) => void
}

const SignIn = (props: IMapStateToProps & IMapDispatchToProps) => {

    const onChangeStatus = (e:  ChangeEvent<HTMLInputElement>) => {
        props.changeStatus(e.currentTarget.checked)
    }

    const onChangeEmail = (e:  ChangeEvent<HTMLInputElement>) =>{
        props.ChangeEmail( e.currentTarget.value)
    }

    const onChangePassword = (e:  ChangeEvent<HTMLInputElement>) => {
        props.ChangePassword(e.currentTarget.value)
    }
    const logIn = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log(props.login(props.data.email, props.data.password, props.data.rememberMe))
    }

    return (
        <div>
            <div>
                <input type="email" placeholder="Enter your Email" value={props.data.email} onChange={onChangeEmail}/>
            </div>
            <div>
                <input type="text" placeholder="Enter your password" value={props.data.password} onChange={onChangePassword}/>
            </div>
            <div>
                <NavLink to={FORGOT_PATH}>Forgot password?</NavLink>
            </div>
            <div>
                <input type="checkbox" checked={props.data.rememberMe} onChange={onChangeStatus}/><span>Remember me</span>
            </div>
            <div>
                <button onClick={logIn}>Sing In</button>
            </div>
            <div>
                <NavLink to={REGISTER_PATH}>Registration</NavLink>
            </div>
        </div>
    );
};

const mapStateToProps = (state:RootState): IMapStateToProps => ({
    data: state.signIn
})

export default connect(mapStateToProps, {changeStatus, ChangeEmail, ChangePassword, login})(SignIn);