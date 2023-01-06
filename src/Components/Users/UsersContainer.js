import {connect} from 'react-redux';
import Users from './Users';
import React from 'react';
import {addTotalCount, addUsers, follow, unfollow} from '../../Redax/users-reducer';
import Preloader from '../Preloader/Preloader';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.addUsers(this.props.count, this.props.page);
  }

  eventClick = pageNum => {
    this.props.addUsers(this.props.count, pageNum);
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
          isDisabling={this.props.isDisabling}
          onDisabling={this.props.onDisabling}
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
    isDisabling: state.usersBranch.isDisabling,
  };
};

export default connect(mapStateToProps, {
  addUsers,
  follow,
  unfollow,
  addTotalCount,
})(UsersContainer);
