const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const set_ClickPageAC = 'setClickPageAC';
const set_totalCountAC = 'set_totalCountAC';
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setClickPageAC = (p) => ({type: set_ClickPageAC, p})
export const setTotalCountAC = (totalCount) => ({type: set_totalCountAC, totalCount})
let initialState = {
    users: [],
    pageSize: 10,
    count:2,
    totalCount:100,
}
let usersReduser = (state = initialState, action) => {


    switch (action.type) {
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {...state, users:action.users}
        }
        case set_ClickPageAC: {
            return {...state,count:action.p}
        }
        case set_totalCountAC: {
            return {...state,totalCount:action.totalCount}
        }
        default:
            return state

    }

}


export default usersReduser