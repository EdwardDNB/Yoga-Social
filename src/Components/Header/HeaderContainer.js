import Header from './Header';
import React from 'react';
import axios from 'axios';
import {axiosConfig} from '../Users/UsersContainer';
import {connect} from 'react-redux';
import {setAuthData} from '../../Redax/auth-reducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`/auth/me`, {
        ...axiosConfig,
      })
      .then(response => {
        console.log(response);
        let {id, email, login} = response.data.data;
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
