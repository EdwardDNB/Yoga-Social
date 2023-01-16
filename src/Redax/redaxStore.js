import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunk from 'redux-thunk';
import {reducer} from 'redux-form';

let reducers = combineReducers({
  ProfileBranch: profileReducer,
  DialogsBranch: dialogsReducer,
  SideBar: sidebarReducer,
  usersBranch: usersReducer,
  authReducer: authReducer,
  form: reducer,
});
let store = createStore(reducers, applyMiddleware(thunk));
export default store;
