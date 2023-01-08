import React from 'react';
import {Navigate} from 'react-router-dom';
import {connect} from 'react-redux';

let msp = state => ({isAuth: state.authReducer.isAuth});
export const withAuthRedirect = Component => {
  class Redirect extends React.Component {
    render() {
      if (!this.props.isAuth) return <Navigate to="../login" />;
      return <Component {...this.props} />;
    }
  }
  return connect(msp)(Redirect);
};
