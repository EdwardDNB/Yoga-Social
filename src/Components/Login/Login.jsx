import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Profile/MyPosts/Textarea";
import {required} from "../Validate/Validate";
import {connect} from "react-redux";
import {Log_in, Logout} from "../Redux/authReduser";
import {Navigate} from "react-router-dom";
import s from '../Profile/MyPosts/Textarea.module.css'


const loginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"}
                       component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type={"password"}
                       component={Input} validate={[required]}/>
            </div>
            <label>
                <Field name="rememberMe" component="input" type="radio" value="true"/> remember
            </label>
            {props.error && <div className={s.formSummeryError}>
            {props.error}
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