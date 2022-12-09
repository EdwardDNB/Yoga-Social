let FOLLOWED = 'FOLLOWED';
let UNFOLLOWED = 'UNFOLLOWED';
let ADD_users = 'ADD-users';
let onPageClick = 'onPageClick';
let onTotalCount = 'onTotalCount';
let onFetching = 'onFetching';
export const actionAddUsers = users => ({type: ADD_users, users});
export const followedAC = userID => ({type: FOLLOWED, userID});
export const unfollowedAC = userID => ({type: UNFOLLOWED, userID});
export const onPageClickAC = pageNum => ({type: onPageClick, pageNum});
export const onTotalCountAC = totalCount => ({type: onTotalCount, totalCount});
export const onFetchingAC = isFetching => ({type: onFetching, isFetching});

let existingStore = {
  users: [
    /* {
      name: 'Ruslan',
      id: 1,
      followed: true,
      photos: {large: null, small: null},
    },
    {
      name: 'Ludmila',
      id: 2,
      followed: false,
      photos: {large: null, small: null},
    },
    {
      name: 'Anna',
      id: 3,
      followed: true,
      photos: {large: null, small: null},
    },
    {
      name: 'Petr',
      id: 4,
      followed: false,
      photos: {large: null, small: null},
    },
    {
      name: 'Egor',
      id: 5,

      followed: true,
      photos: {large: null, small: null},
    },
    {
      name: 'Sergei',
      id: 6,

      followed: false,
      avatar: null,
    },*/
  ],
  totalCount: 6,
  page: 1,
  count: 100,
  isFetching: false,
};
const usersReducer = (state = existingStore, action) => {
  switch (action.type) {
    case FOLLOWED: {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return {...u, followed: true};
          }
          return u;
        }),
      };
    }
    case UNFOLLOWED: {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return {...u, followed: false};
          }
          return u;
        }),
      };
    }

    case ADD_users: {
      return {
        ...state,
        users: action.users,
      };
    }
    case onTotalCount: {
      return {
        ...state,
        totalCount: action.totalCount,
      };
    }
    case onPageClick: {
      return {
        ...state,
        page: action.pageNum,
      };
    }
    case onFetching: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    default:
      return state;
  }
};
export default usersReducer;
