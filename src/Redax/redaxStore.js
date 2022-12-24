import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
let reducers = combineReducers({
  ProfileBranch: profileReducer,
  DialogsBranch: dialogsReducer,
  SideBar: sidebarReducer,
  usersBranch: usersReducer,
  authReducer: authReducer,
});
let store = createStore(reducers);
export default store;
