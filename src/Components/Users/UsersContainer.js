import {connect} from 'react-redux';
import Users from './Users';
import React from 'react';
import {
  actionAddUsers,
  followedAC,
  onPageClickAC,
  onTotalCountAC,
  unfollowedAC,
} from '../../Redax/users-reducer';
import axios from 'axios';

const axiosConfig = {
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'b9addcf5-3c00-459c-a722-4417794f0ffc',
  },
};

class UsersAPI extends React.Component {
  componentDidMount() {
    axios
      .get(`/users?count=${this.props.count}&page=${this.props.page}`, {...axiosConfig})
      .then(request => {
        this.props.addUsers(request.data.items);
        this.props.addTotalCount(request.data.totalCount);
      });
  }

  eventClick = pageNum => {
    this.props.onPageClick(pageNum);
    axios
      .get(`/users?count=${this.props.count}&page=${pageNum}`, {...axiosConfig})
      .then(request => {
        this.props.addUsers(request.data.items);
      });
  };

  render() {
    return (
      <Users
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        totalCount={this.props.totalCount}
        count={this.props.count}
        page={this.props.page}
        eventClick={this.eventClick}
        /* eventClick={(pageNum) => this.eventClick(pageNum)}*/
      />
    );
  }
}

let mapStateToProps = state => {
  return {
    users: state.usersBranch.users,
    totalCount: state.usersBranch.totalCount,
    page: state.usersBranch.page,
    count: state.usersBranch.count,
  };
};

let mapDispatchToProps = dispatch => {
  return {
    addUsers: users => {
      dispatch(actionAddUsers(users));
    },
    follow: userID => {
      dispatch(followedAC(userID));
    },
    unfollow: userID => {
      dispatch(unfollowedAC(userID));
    },
    onPageClick: pageNum => {
      dispatch(onPageClickAC(pageNum));
    },
    addTotalCount: totalCount => {
      dispatch(onTotalCountAC(totalCount));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);
export default UsersContainer;
