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
import Preloader from "../../Common/Loader";
import {usersApi} from "../../API/API";

export const axiosDefault = {
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "b9addcf5-3c00-459c-a722-4417794f0ffc"
    }
}

class UsersApiContainer extends React.Component {


    componentDidMount() {
        usersApi.getUsers(this.props.count,this.props.pageSize).then(data => {
                    this.props.setFetchingCount(true)
                    this.props.setTotalCount(data.totalCount)
                    this.props.setUsers(data.items)
                }
            ).then(() => {
            this.props.setFetchingCount(false)
        })
    }

    clickEvent = (page) => {
        this.props.setFetchingCount(true)
        this.props.setClickPage(page)
        usersApi.getUsers(page,this.props.pageSize)
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


const UsersContainer = connect(mapStateToProps, {
    follow,unfollow,setUsers,setClickPage,setTotalCount,setFetchingCount
})(UsersApiContainer)

export default UsersContainer
