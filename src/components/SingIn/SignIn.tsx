import React, {ChangeEvent} from 'react';
import {connect} from "react-redux";
import {RootState} from "../../redux/store";
import {ChangeEmail, ChangePassword, changeStatus, IUser} from "../../redux/SignInReducer";


interface IMapStateToProps {
    data: IUser
}

interface IMapDispatchToProps {
    changeStatus: (e:boolean) => void
    ChangeEmail: (e: string) => void
    ChangePassword: (e:string) => void
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

    return (
        <div>
            <div>
                <input type="email" placeholder={props.data.email} value={props.data.email} onChange={onChangeEmail}/>
            </div>
            <div>
                <input type="text" placeholder={props.data.password} value={props.data.password} onChange={onChangePassword}/>
            </div>
            <div>
                <input type="checkbox" checked={props.data.rememberMe} onChange={onChangeStatus}/><span>Remember me</span>
            </div>
            <div>
                <button>Sing In</button>
            </div>
        </div>
    );
};

const mapStateToProps = (state:RootState): IMapStateToProps => ({
    data: state.signIn
})

export default connect(mapStateToProps, {changeStatus, ChangeEmail, ChangePassword})(SignIn);