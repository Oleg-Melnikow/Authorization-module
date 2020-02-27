import React, {ChangeEvent, useState} from "react";
import style from "../Forgot/Forgot.module.css";

type IProps = {
    password: string
    ChangePassword: (e: string) => void
}

const InputPassword = (props: IProps) => {

    const [valid, SetValidet] = useState(false)
    const [invalid, SetInvalid] = useState(false)

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        props.ChangePassword(e.currentTarget.value)
        let email = e.currentTarget.value
        let pattern = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,}$"
        if (email.match(pattern)) {
            SetValidet(true)
            SetInvalid(false)
        } else {
            SetValidet(false)
            SetInvalid(true)
        }
        if (email === "" || null) {
            SetInvalid(false)
        }

    }

    const validated = () => {
        SetInvalid(false)
    }

    return (
        <div>
            <input required={true} type="password" placeholder="Enter your password" value={props.password}
    onChange={onChangePassword} onBlur={validated}/>
    <div className={style.validation}>
        {valid ? <span style={{color: "#00ff00"}}>Your Password in Valid.</span> : null}
    {invalid ? <span style={{color: "#ff0000"}}>Please Enter Valid Password</span> : null}
    </div>
    </div>
    )
}

export default InputPassword