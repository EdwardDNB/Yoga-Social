import React from "react";
import {reduxForm} from "redux-form";
import {Input} from "../../Common/Textarea";
import {required} from "../Validate/Validate";
import {connect} from "react-redux";
import {Log_in, Logout} from "../Redux/authReduser";
import {Navigate} from "react-router-dom";
import s from '../../Common/Textarea.module.css'
import {CreateField} from "../../Common/CreateField";


const loginForm = ({handleSubmit,error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {CreateField("Email","email",Input,[required])}
            {CreateField("Password","password",Input,[required], {type: "password"})}
            <label>
                {CreateField(null,"rememberMe","input",null, {type: "radio",value:"true",text:'remember'})}
            </label>
            {error && <div className={s.formSummeryError}>
            {error}
                </div> }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(loginForm)

export const login = (props) => {
    const onSubmit = (formData) => {
        props.Log_in(formData.email,formData.password,formData.rememberMe)
    }
    if(props.isAuth)return <Navigate to='../profile'/>
    return <div>
        <div><h1>Login</h1></div>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>

}
let MS=(state)=>({isAuth: state.auth.isAuth})

export default connect(MS,{
    Log_in,Logout
})(login)