import {connect} from 'react-redux';
import PostsContainer from './Posts/postsContainer';
import Profile from './Profile';
import React from 'react';
import axios from 'axios';
import {axiosConfig} from '../Users/UsersContainer';
import Preloader from '../Preloader/Preloader';
import {onFetching} from '../../Redax/users-reducer';
import {setProfileData} from '../../Redax/profile-reducer';
import {useParams} from 'react-router-dom';

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`/profile/${this.props.params.userId}`, {
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
