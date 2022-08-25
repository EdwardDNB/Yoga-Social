import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../Redux/usersReduser";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
        }
    }

}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
