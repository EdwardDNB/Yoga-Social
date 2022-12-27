import Header from './Header';
import React from 'react';
import {connect} from 'react-redux';
import {setAuthData} from '../../Redax/auth-reducer';
import {authApi} from '../../API/api';

class HeaderContainer extends React.Component {
  componentDidMount() {
    authApi.getAuth().then(data => {
      let {id, email, login} = data.data;
      this.props.setAuthData({id, email, login});
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = state => ({
  login: state.authReducer.login,
  isAuth: state.authReducer.isAuth,
});

export default connect(mapStateToProps, {
  setAuthData,
})(HeaderContainer);
