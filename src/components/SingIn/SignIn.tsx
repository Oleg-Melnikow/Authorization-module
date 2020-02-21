import React from 'react';

const SignIn = () => {
    return (
        <div>
            <div>
                <input type="email"/>
            </div>
            <div>
                <input type="password"/>
            </div>
            <div>
                <input type="checkbox"/> <span>Remember me</span>
            </div>
        </div>
    );
};

export default SignIn;