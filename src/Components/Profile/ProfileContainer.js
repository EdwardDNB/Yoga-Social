import {connect} from 'react-redux';
import PostsContainer from './Posts/postsContainer';
import Profile from './Profile';
import React from 'react';
import axios from 'axios';
import {axiosConfig} from '../Users/UsersContainer';
import Preloader from '../Preloader/Preloader';
import {onFetching} from '../../Redax/users-reducer';
import {setProfileData} from '../../Redax/profile-reducer';

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`/profile/${this.props.ProfileData.userId}`, {
        ...axiosConfig,
      })
      .then(request => {
        this.props.onFetching(true);
        this.props.setProfileData(request.data);
      })
      .then(() => {
        this.props.onFetching(false);
      });
  }

  render() {
    return (
      <>
        {this.props.isFetching === true ? <Preloader /> : null}
        <Profile ProfileData={this.props.ProfileData} />
        <PostsContainer />
      </>
    );
  }
}
let mapStateToProps = state => {
  return {
    ProfileData: state.ProfileBranch.ProfileData,
    isFetching: state.usersBranch.isFetching,
  };
};
export default connect(mapStateToProps, {
  onFetching,
  setProfileData,
})(ProfileContainer);
