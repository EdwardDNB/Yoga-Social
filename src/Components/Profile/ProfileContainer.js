import {connect} from 'react-redux';
import PostsContainer from './Posts/postsContainer';
import Profile from './Profile';
import React from 'react';
import Preloader from '../Preloader/Preloader';
import {onFetching} from '../../Redax/users-reducer';
import {setProfileData} from '../../Redax/profile-reducer';
import {useParams} from 'react-router-dom';
import {profileApi} from '../../API/api';

class ProfileContainer extends React.Component {
  componentDidMount() {
    profileApi
      .getProfile(this.props.params.userId)
      .then(data => {
        this.props.onFetching(true);
        this.props.setProfileData(data);
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
let Params = props => {
  return <ProfileContainer {...props} params={useParams()} />;
};

let mapStateToProps = state => {
  return {
    ProfileData: state.ProfileBranch.ProfileData,
    isFetching: state.usersBranch.isFetching,
  };
};
export default connect(mapStateToProps, {
  onFetching,
  setProfileData,
})(Params);
