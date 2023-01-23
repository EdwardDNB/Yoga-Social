import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Input} from '../Validation/FormFields';
import {connect} from 'react-redux';
import {postAuthData} from '../../Redax/auth-reducer';
import {Navigate} from 'react-router-dom';
import s from '../Validation/FormFields.module.css';

let loginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Login'} name={'email'} component={Input} />
      </div>
      <div>
        <Field placeholder={'Password'} type={'password'} name={'password'} component={Input} />
      </div>
      <label>
        <Field name="rememberMe" component="input" type="radio" value="true" /> remember
      </label>
      {props.error && <div className={s.loginError}>{props.error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({form: 'login'})(loginForm);

export const login = props => {
  const onSubmit = formData => {
    console.log(formData);
    props.postAuthData(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth === true) return <Navigate to={'../profile'} />;
  return (
    <div>
      <div>
        <h1>Login</h1>
      </div>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
let STP = state => ({isAuth: state.authReducer.isAuth});
export default connect(STP, {
  postAuthData,
})(login);
