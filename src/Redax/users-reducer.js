let FOLLOWED = 'FOLLOWED';
let UNFOLLOWED = 'UNFOLLOWED';
let ADD_users = 'ADD-users';
let on_PageClick = 'onPageClick';
let on_TotalCount = 'onTotalCount';
let on_Fetching = 'onFetching';
export const addUsers = users => ({type: ADD_users, users});
export const follow = userID => ({type: FOLLOWED, userID});
export const unfollow = userID => ({type: UNFOLLOWED, userID});
export const onPageClick = pageNum => ({type: on_PageClick, pageNum});
export const addTotalCount = totalCount => ({type: on_TotalCount, totalCount});
export const onFetching = isFetching => ({type: on_Fetching, isFetching});

let existingStore = {
  users: [
    {
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
      photos: {large: null, small: null},
    },
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
    case on_TotalCount: {
      return {
        ...state,
        totalCount: action.totalCount,
      };
    }
    case on_PageClick: {
      return {
        ...state,
        page: action.pageNum,
      };
    }
    case on_Fetching: {
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
