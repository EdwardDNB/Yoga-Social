import React from 'react';
import {Field, reduxForm} from 'redux-form';

let loginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Login'} name={'login'} component={'input'} />
      </div>
      <div>
        <Field placeholder={'Password'} name={'password'} component={'input'} />
      </div>
      <label>
        <Field name="remember" component="input" type="radio" value="remembered" /> remember
      </label>
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
  };
  return (
    <div>
      <div>
        <h1>Login</h1>
      </div>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default login;
