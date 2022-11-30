import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setClickPageAC, setTotalCountAC, setUsersAC, unfollowAC} from "../Redux/usersReduser";
import React from "react";
import axios from "axios";

const axiosDefault = {
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "25f0b903-3cee-4b85-ab14-1376f9b3200e"
    }
}

class UsersApiContainer extends React.Component {


    componentDidMount() {
        axios.get(`/users?page=${this.props.count}&count=${this.props.pageSize}`, {...axiosDefault})
            .then(response => {
                    this.props.totalCount(response.data.totalCount)
                    this.props.setUsers(response.data.items)
                }
            )
    }

    clickEvent = (page) => {
        this.props.clickPage(page)
        axios.get(`/users?page=${page}&count=${this.props.pageSize}`, {...axiosDefault})
            .then(response => this.props.setUsers(response.data.items))
    }

    render() {
        return <Users
            totalUsersCountNow={this.props.totalUsersCount}
            count={this.props.count}
            pageSize={this.props.pageSize}
            clickEvent={this.clickEvent}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        count: state.usersPage.count,
        totalUsersCount: state.usersPage.totalCount
    }
}
let mapDispatchToProps = (dispach) => {
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
        }
    }

}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiContainer)

export default UsersContainer
