import {connect} from "react-redux";
import Users from "./Users";
import {actionAddUsers, followedAC, unfollowedAC} from "../../Redax/users-reducer";

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

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)
export default UsersContainer