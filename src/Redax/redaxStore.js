import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
let redusers=combineReducers({
    ProfileBranch:profileReducer,
    DialogsBranch:dialogsReducer,
    SideBar:sidebarReducer
})
let stoke=createStore(redusers)
export default stoke


