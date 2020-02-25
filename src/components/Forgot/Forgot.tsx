import React, {ChangeEvent, MouseEvent} from 'react';
import {SIGN_IN_PATH} from "../Header/Routes";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {RootState} from "../../redux/store";
import {ForgotThunk, SetError, SetForgot, StatusForgot} from "../../redux/ForgotReducer";


interface IMapStateToProps {
    email: string,
    error: string | null,
    isStatus: boolean | null
}

interface IMapDispatchToProps {
    SetForgot: (e: string) => void,
    ForgotThunk: (e: string) => void,
    StatusForgot: (e: boolean | null) => void
}

const Forgot = (props: IMapStateToProps & IMapDispatchToProps) => {

    const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        props.SetForgot(e.currentTarget.value)
    }

    const forgot = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log(props.ForgotThunk(props.email))
        props.StatusForgot(false)
    }

    return (
        <div>
            <div>
                <h2>Forgot</h2>
            </div>
            <div style={{padding: "10px"}}>
                {props.isStatus !== null
                    ? <span style={{fontSize: "24px"}}>{props.isStatus
                        ? <span style={{color: "darkRed"}}>{props.error}</span>
                        : <span style={{color: "yellow"}}>Loading...</span>}</span>
                    : null}
            </div>
            <div>
                <input type="email" value={props.email} onChange={changeEmail}/>
            </div>
            <div>
                <button onClick={forgot}>Send email</button>
            </div>
            <div>
                <NavLink to={SIGN_IN_PATH}>Sign In</NavLink>
            </div>
        </div>
    );
};

const mapStateToProps = (state: RootState): IMapStateToProps => ({
    email: state.forgot.email,
    error: state.forgot.error,
    isStatus: state.forgot.isStatus
})

export default connect(mapStateToProps, {SetForgot, ForgotThunk, SetError, StatusForgot})(Forgot);