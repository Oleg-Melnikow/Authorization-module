import React from 'react';
import {SIGN_IN_PATH} from "../Header/Routes";
import {NavLink} from "react-router-dom";
import style from "../Forgot/Forgot.module.css";

const Profile = () => {
    return (
        <div>
            <div>
                <h2>Profile</h2>
            </div>
            <div>
                <NavLink className={style.link} to={SIGN_IN_PATH}>Sign In</NavLink>
            </div>
        </div>
    );
};

export default Profile;