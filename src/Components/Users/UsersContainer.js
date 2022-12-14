import {connect} from 'react-redux';
import Users from './Users';
import React from 'react';
import {
  addTotalCount,
  addUsers,
  follow,
  onFetching,
  onPageClick,
  unfollow,
} from '../../Redax/users-reducer';
import axios from 'axios';
import Preloader from '../Preloader/Preloader';

export const axiosConfig = {
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'b9addcf5-3c00-459c-a722-4417794f0ffc',
  },
};

class UsersContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`/users?count=${this.props.count}&page=${this.props.page}`, {...axiosConfig})
      .then(request => {
        this.props.onFetching(true);
        this.props.addUsers(request.data.items);
        this.props.addTotalCount(request.data.totalCount);
      })
      .then(() => {
        this.props.onFetching(false);
      });
  }

  eventClick = pageNum => {
    this.props.onFetching(true);
    this.props.onPageClick(pageNum);
    axios
      .get(`/users?count=${this.props.count}&page=${pageNum}`, {...axiosConfig})
      .then(request => {
        this.props.addUsers(request.data.items);
      })
      .then(() => {
        this.props.onFetching(false);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching === true ? <Preloader /> : null}
        <Users
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          totalCount={this.props.totalCount}
          count={this.props.count}
          page={this.props.page}
          eventClick={this.eventClick}
        />
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    users: state.usersBranch.users,
    totalCount: state.usersBranch.totalCount,
    page: state.usersBranch.page,
    count: state.usersBranch.count,
    isFetching: state.usersBranch.isFetching,
  };
};

export default connect(mapStateToProps, {
  addUsers,
  follow,
  unfollow,
  onPageClick,
  addTotalCount,
  onFetching,
})(UsersContainer);
