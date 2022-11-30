import {connect} from "react-redux";
import Users from "./Users";
import React from "react";
import {actionAddUsers, followedAC, unfollowedAC} from "../../Redax/users-reducer";
import axios from "axios";

const axiosConfig={
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "b9addcf5-3c00-459c-a722-4417794f0ffc"
    }
}
class UsersAPI extends React.Component{
componentDidMount() {
axios.get('/users',{...axiosConfig}).then((request)=>{
    console.log(request)
this.props.addUsers(request.data.items)
})
}
render() {
    return <Users users={this.props.users}
                  follow={this.props.follow}
                  unfollow={this.props.unfollow}/>
}
}







let mapStateToProps = (state) => {
    return {
        users:state.usersBranch.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addUsers: (users) => {
            dispatch(actionAddUsers(users))
        },
        follow: (userID) => {
            dispatch(followedAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowedAC(userID))
        }
    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersAPI)
export default UsersContainer