import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setClickPage,
    setFetchingCount,
    setTotalCount,
    setUsers,
    unfollow
} from "../Redux/usersReduser";
import React from "react";
import axios from "axios";
import Preloader from "../../Common/Loader";

export const axiosDefault = {
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "b9addcf5-3c00-459c-a722-4417794f0ffc"
    }
}

class UsersApiContainer extends React.Component {


    componentDidMount() {
        axios.get(`/users?page=${this.props.count}&count=${this.props.pageSize}`, {...axiosDefault})
            .then(response => {
                    this.props.setFetchingCount(true)
                    this.props.setTotalCount(response.data.totalCount)
                    this.props.setUsers(response.data.items)
                }
            ).then(() => {
            this.props.setFetchingCount(false)
        })
    }

    clickEvent = (page) => {
        this.props.setFetchingCount(true)
        this.props.setClickPage(page)
        axios.get(`/users?page=${page}&count=${this.props.pageSize}`, {...axiosDefault})
            .then(response => this.props.setUsers(response.data.items))
            .then(() => this.props.setFetchingCount(false))

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
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        count: state.usersPage.count,
        totalUsersCount: state.usersPage.totalCount,
        isFetching: state.usersPage.isFetching
    }
}
/*let mapDispatchToProps = (dispach) => {
    return {
        follow: (userId) => {
            dispach(followAC(userId))
        },
        unfollow: (userId) => {
            dispach(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispach(setUsersAC(users))
        },
        clickPage: (p) => {
            dispach(setClickPageAC(p))
        },
        totalCount: (p) => {
            dispach(setTotalCountAC(p))
        },
        setFetchingCount: (isFetching) => {
            dispach(setFetchingCountAC(isFetching))
        }
    }

}*/

const UsersContainer = connect(mapStateToProps, {
    follow,unfollow,setUsers,setClickPage,setTotalCount,setFetchingCount
})(UsersApiContainer)

export default UsersContainer
