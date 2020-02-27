import React, {ChangeEvent, useState} from "react";
import style from "../Forgot/Forgot.module.css";

interface IProps {
    SetValue: (e: string) => void
    email: string
    error?: string | null
}

const InputEmail = (props: IProps) => {

    const [valid, SetValid] = useState(false)
    const [invalid, SetInvalid] = useState(false)

    const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        props.SetValue(e.currentTarget.value)
        let email = e.currentTarget.value
        let pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
        if (email.match(pattern)) {
            SetValid(true)
            SetInvalid(false)
        } else {
            SetValid(false)
            SetInvalid(true)
        }
        if (email === "" || null) {
            SetInvalid(false)
        }

    }
    const validated = () => {
        SetValid(false)
    }

    return (
        <div>
            <input type="email" value={props.email} required={true}
                   onChange={changeEmail} onBlur={validated}/>
            <div
                className={style.validation}>
                {valid ? <span style={{color: "#00ff00"}}>Your Email Address in Valid.</span> : null}
                {invalid ? <span style={{color: "#ff0000"}}>Please Enter Valid Email Address</span> : null}
            </div>
        </div>
    )
}

export default InputEmail;