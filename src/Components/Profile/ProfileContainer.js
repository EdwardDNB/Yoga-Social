import {connect} from 'react-redux';
import PostsContainer from './Posts/postsContainer';
import Profile from './Profile';
import React from 'react';
import Preloader from '../Preloader/Preloader';
import {getProfileStatus, setProfileData, setProfileStatus} from '../../Redax/profile-reducer';
import {useParams} from 'react-router-dom';
import {withAuthRedirect} from '../Login/AuthRedirector';
import {compose} from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let id = this.props.params.userId;
    if (!id) {
      id = this.props.userId;
    }
    this.props.setProfileData(id);
    this.props.getProfileStatus(id);
  }

  render() {
    return (
      <>
        {this.props.isFetching === true ? <Preloader /> : null}
        <Profile
          ProfileData={this.props.ProfileData}
          ProfileStatus={this.props.Status}
          setProfileStatus={this.props.setProfileStatus}
        />
        <PostsContainer />
      </>
    );
  }
}
let Params = props => {
  return <ProfileContainer {...props} params={useParams()} />;
};

let mapStateToProps = state => {
  return {
    ProfileData: state.ProfileBranch.ProfileData,
    Status: state.ProfileBranch.Status,
    isFetching: state.usersBranch.isFetching,
    userId: state.authReducer.id,
  };
};
export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {setProfileData, getProfileStatus, setProfileStatus}),
)(Params);
