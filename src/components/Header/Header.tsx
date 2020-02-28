import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {FORGOT_PATH, PROFILE_PATH, REGISTER_PATH, SIGN_IN_PATH} from "./Routes";
import style from "./Header.module.css"

const Header = () => {
    const [show, setShow] = useState(false);

    return (
        <div className={style.wrapper}>
            <button className={style.button} onClick={() => setShow(!show)}>{show ? 'hide dev header' : 'show dev header'}</button>
            {show && <>
                <NavLink to={SIGN_IN_PATH}>SingIn</NavLink>
                <NavLink to={REGISTER_PATH}>Registration</NavLink>
                <NavLink to={FORGOT_PATH}>Forgot</NavLink>
                <NavLink to={PROFILE_PATH}>Profile</NavLink>
            </>}
        </div>
    );
};

export default Header;