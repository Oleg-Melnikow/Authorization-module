import React from 'react';
import {SIGN_IN_PATH} from "../Header/Routes";
import {NavLink} from "react-router-dom";

const Profile = () => {
    return (
        <div>
            <div>
                <h2>Profile</h2>
            </div>
            <div>
                <NavLink to={SIGN_IN_PATH}>Sign In</NavLink>
            </div>
        </div>
    );
};

export default Profile;