import {connect} from "react-redux";
import Users from "./Users";
import {
    follow, getUsers,
    setTotalCount,
    unfollow
} from "../Redux/usersReduser";
import React from "react";
import Preloader from "../../Common/Loader";
import {
    countSelector, isDisablingSelector,
    isFetchingSelector,
    pageSizeSelector, superUsersSelector,
    totalUsersCountSelector,
} from "../Redux/usersSelector";



class UsersApiContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.count,this.props.pageSize)
    }

    clickEvent = (page) => {
        this.props.getUsers(page,this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching === true ? <Preloader/>  : null}
            <Users
                totalUsersCountNow={this.props.totalUsersCount}
                count={this.props.count}
                pageSize={this.props.pageSize}
                clickEvent={this.clickEvent}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                isDisabling={this.props.isDisabling}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: superUsersSelector(state),
        pageSize: pageSizeSelector(state),
        count: countSelector(state),
        totalUsersCount: totalUsersCountSelector(state),
        isFetching: isFetchingSelector(state),
        isDisabling: isDisablingSelector(state)
    }
}


const UsersContainer = connect(mapStateToProps, {
    follow,unfollow,setTotalCount,
    getUsers
})(UsersApiContainer)

export default UsersContainer
