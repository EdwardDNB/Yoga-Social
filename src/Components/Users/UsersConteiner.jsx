import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setClickPageAC, setTotalCountAC, setUsersAC, unfollowAC} from "../Redux/usersReduser";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        count:state.usersPage.count,
        totalUsersCount:state.usersPage.totalCount
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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
