import React from 'react';
import {connect} from "react-redux";
import {RootState} from "../../redux/store";
import {IUser} from "../../redux/SignInReducer";


interface IMapStateToProps {
    data: IUser
}

const SignIn = (props: IMapStateToProps) => {
    return (
        <div>
            <div>
                <input type="email" placeholder={props.data.email}/>
            </div>
            <div>
                <input type="password" placeholder={props.data.password}/>
            </div>
            <div>
                <input type="checkbox" checked={props.data.rememberMe}/> <span>Remember me</span>
            </div>
        </div>
    );
};

const mapStateToProps = (state:RootState): IMapStateToProps => ({
    data: state.signIn
})

export default connect(mapStateToProps, {})(SignIn);