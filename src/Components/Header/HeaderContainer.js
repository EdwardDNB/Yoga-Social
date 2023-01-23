import Header from './Header';
import React from 'react';
import {connect} from 'react-redux';
import {deleteAuthData} from '../../Redax/auth-reducer';

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = state => ({
  login: state.authReducer.login,
  isAuth: state.authReducer.isAuth,
});

export default connect(mapStateToProps, {
  deleteAuthData,
})(HeaderContainer);
