import PhotoDefault from'../Users/userFoto.webp'
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const set_ClickPageAC = 'setClickPageAC';
const set_totalCountAC = 'set_totalCountAC';
const set_FetchingCountAC = 'set_FetchingCountAC';
const set_DisablingCountAC = 'set_DisablingCountAC';
export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers= (users) => ({type: SET_USERS, users})
export const setClickPage = (p) => ({type: set_ClickPageAC, p})
export const setTotalCount = (totalCount) => ({type: set_totalCountAC, totalCount})
export const setFetchingCount = (isFetching) => ({type: set_FetchingCountAC, isFetching})
export const setDisablingCount = (isDisabling,userId) => ({type: set_DisablingCountAC, isDisabling,userId})
let initialState = {
    users: [{photos:{small:PhotoDefault,large:PhotoDefault}}
    ],
    pageSize: 100,
    count:1,
    totalCount:100,
    isFetching:false,
    isDisabling:[]
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
        case set_FetchingCountAC: {
            return {...state,isFetching:action.isFetching}
        }
        case set_DisablingCountAC: {
            return{...state,isDisabling:action.isDisabling?
                    [...state.isDisabling,action.userId]
                    :state.isDisabling.filter(id=>id=!action.userId)}
        }
        default:
            return state

    }

}


export default usersReduser