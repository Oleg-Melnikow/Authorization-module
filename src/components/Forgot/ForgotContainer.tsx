import React, {MouseEvent} from 'react';
import {connect} from "react-redux";
import {RootState} from "../../redux/store";
import {ForgotThunk, SetError, SetForgot, StatusForgot} from "../../redux/ForgotReducer";
import Forgot from "./Forgot";


export interface IMapStateToProps {
    email: string,
    error: string | null,
    isStatus: boolean | null
}

export interface IMapDispatchToProps {
    SetForgot: (e: string) => void,
    ForgotThunk: (e: string) => void,
    StatusForgot: (e: boolean | null) => void
}

const ForgotContainer = (props: IMapStateToProps & IMapDispatchToProps) => {

    const forgot = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log(props.ForgotThunk(props.email))
        props.StatusForgot(false)
    }

    return (
        <Forgot forgot={forgot} SetValue={props.SetForgot} email={props.email} error={props.error} isStatus={props.isStatus}/>
    );
};

const mapStateToProps = (state: RootState): IMapStateToProps => ({
    email: state.forgot.email,
    error: state.forgot.error,
    isStatus: state.forgot.isStatus
})

export default connect(mapStateToProps, {SetForgot, ForgotThunk, SetError, StatusForgot})(ForgotContainer);