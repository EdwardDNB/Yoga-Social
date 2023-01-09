import {connect} from 'react-redux';
import PostsContainer from './Posts/postsContainer';
import Profile from './Profile';
import React from 'react';
import Preloader from '../Preloader/Preloader';
import {setProfileData} from '../../Redax/profile-reducer';
import {useParams} from 'react-router-dom';
import {withAuthRedirect} from '../Login/AuthRedirector';
import {compose} from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setProfileData(this.props.params.userId);
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
export default compose(withAuthRedirect, connect(mapStateToProps, {setProfileData}))(Params);
