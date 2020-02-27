import React, {MouseEvent} from 'react';
import {SIGN_IN_PATH} from "../Header/Routes";
import {NavLink} from "react-router-dom";
import InputEmail from "../InputEmail/InputEmail"
import {IMapStateToProps} from "./ForgotContainer";
import style from "./Forgot.module.css"

interface IProps {
    forgot: (e: MouseEvent<HTMLButtonElement>) => void
    SetValue: (e: string) => void
}

type Props = IMapStateToProps & IProps

const Forgot = (props: Props) => {

    return (
        <div className={style.container}>
            <div>
                <h2>Forgot</h2>
            </div>
            <div className={style.text}>
                {props.isStatus !== null
                    ? <span>{props.isStatus
                        ? <span style={{color: "red"}}>{props.error}</span>
                        : <span style={{color: "yellow"}}>Loading...</span>}</span>
                    : null}
            </div>
            <InputEmail SetValue={props.SetValue} email={props.email} error={props.error}/>
            <div>
                <button className={style.button} onClick={props.forgot}>Send email</button>
            </div>
            <div>
                <NavLink className={style.link} to={SIGN_IN_PATH}>Sign In</NavLink>
            </div>
        </div>
    );
};

export default Forgot;