import {usersApi} from '../API/api';

let FOLLOWED = 'FOLLOWED';
let UNFOLLOWED = 'UNFOLLOWED';
let ADD_users = 'ADD-users';
let on_PageClick = 'onPageClick';
let on_TotalCount = 'onTotalCount';
let on_Fetching = 'on_Fetching';
let on_Disabling = 'on_Disabling';
export const addUsersSuccess = users => ({type: ADD_users, users});
export const followSuccess = userID => ({type: FOLLOWED, userID});
export const unfollowSuccess = userID => ({type: UNFOLLOWED, userID});
export const onPageClick = pageNum => ({type: on_PageClick, pageNum});
export const addTotalCount = totalCount => ({type: on_TotalCount, totalCount});
export const onFetching = isFetching => ({type: on_Fetching, isFetching});
export const onDisabling = (isDisabling, id) => ({type: on_Disabling, isDisabling, id});

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
  isDisabling: [],
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
    case on_Disabling: {
      return {
        ...state,
        isDisabling: action.isDisabling
          ? [...state.isDisabling, action.id]
          : state.isDisabling.filter(id => id !== action.id),
      };
    }
    default:
      return state;
  }
};
export const addUsers = (count, page) => {
  return dispatch => {
    dispatch(onFetching(true));
    usersApi.getUsers(count, page).then(data => {
      dispatch(onPageClick(page));
      dispatch(addUsersSuccess(data.items));
      dispatch(addTotalCount(data.totalCount));
      dispatch(onFetching(false));
    });
  };
};
export const unfollow = userId => {
  return dispatch => {
    dispatch(onDisabling(true, userId));
    usersApi.getUnfollowUser(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }
      dispatch(onDisabling(false, userId));
    });
  };
};
export const follow = userId => {
  return dispatch => {
    dispatch(onDisabling(true, userId));
    usersApi.getFollowUser(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(onDisabling(false, userId));
    });
  };
};

export default usersReducer;
